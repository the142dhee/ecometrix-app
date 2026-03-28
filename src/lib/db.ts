import { Pool } from 'pg';

declare global {
  var __ecometrixPool: Pool | undefined;
}

export function getDbPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  if (!global.__ecometrixPool) {
    global.__ecometrixPool = new Pool({
      connectionString,
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    });
  }

  return global.__ecometrixPool;
}
