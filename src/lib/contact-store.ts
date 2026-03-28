import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getDbPool } from '@/lib/db';
import { ContactSubmissionInput, ContactSubmissionRecord } from '@/types/contact';

const fallbackFilePath = path.join(process.cwd(), 'data', 'contact-submissions.json');

async function ensureLocalStore() {
  await mkdir(path.dirname(fallbackFilePath), { recursive: true });
}

async function readLocalSubmissions(): Promise<ContactSubmissionRecord[]> {
  await ensureLocalStore();

  try {
    const file = await readFile(fallbackFilePath, 'utf-8');
    return JSON.parse(file) as ContactSubmissionRecord[];
  } catch {
    return [];
  }
}

async function writeLocalSubmissions(submissions: ContactSubmissionRecord[]) {
  await ensureLocalStore();
  await writeFile(fallbackFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
}

async function ensureContactsTable() {
  const pool = getDbPool();

  if (!pool) {
    return;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      reference_id TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT NOT NULL,
      role TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

export async function createContactSubmission(
  input: ContactSubmissionInput,
  referenceId: string,
): Promise<ContactSubmissionRecord> {
  const pool = getDbPool();

  if (pool) {
    await ensureContactsTable();

    const inserted = await pool.query<{
      id: number;
      reference_id: string;
      name: string;
      email: string;
      organization: string;
      role: string;
      message: string;
      created_at: string;
    }>(
      `
      INSERT INTO contact_submissions (reference_id, name, email, organization, role, message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, reference_id, name, email, organization, role, message, created_at;
      `,
      [referenceId, input.name, input.email, input.organization, input.role, input.message],
    );

    const row = inserted.rows[0];

    return {
      id: String(row.id),
      referenceId: row.reference_id,
      name: row.name,
      email: row.email,
      organization: row.organization,
      role: row.role,
      message: row.message,
      createdAt: row.created_at,
    };
  }

  const localSubmissions = await readLocalSubmissions();
  const record: ContactSubmissionRecord = {
    id: String(localSubmissions.length + 1),
    referenceId,
    createdAt: new Date().toISOString(),
    ...input,
  };

  localSubmissions.unshift(record);
  await writeLocalSubmissions(localSubmissions);

  return record;
}

export async function listContactSubmissions(limit = 100): Promise<ContactSubmissionRecord[]> {
  const pool = getDbPool();

  if (pool) {
    await ensureContactsTable();

    const result = await pool.query<{
      id: number;
      reference_id: string;
      name: string;
      email: string;
      organization: string;
      role: string;
      message: string;
      created_at: string;
    }>(
      `
      SELECT id, reference_id, name, email, organization, role, message, created_at
      FROM contact_submissions
      ORDER BY created_at DESC
      LIMIT $1;
      `,
      [limit],
    );

    return result.rows.map((row) => ({
      id: String(row.id),
      referenceId: row.reference_id,
      name: row.name,
      email: row.email,
      organization: row.organization,
      role: row.role,
      message: row.message,
      createdAt: row.created_at,
    }));
  }

  const localSubmissions = await readLocalSubmissions();
  return localSubmissions.slice(0, limit);
}
