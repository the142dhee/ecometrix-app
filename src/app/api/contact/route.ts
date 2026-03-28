import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createContactSubmission } from '@/lib/contact-store';
import { sendContactNotification } from '@/lib/mailer';

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  organization: z.string().min(2).max(120),
  role: z.string().min(2).max(120),
  message: z.string().min(20).max(1500),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please complete all fields with valid details.',
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const referenceId = `ECO-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const submission = await createContactSubmission(parsed.data, referenceId);
    await sendContactNotification(submission);

    return NextResponse.json(
      {
        success: true,
        message: 'Request received successfully. Our team will contact you soon.',
        referenceId,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process request right now. Please try again shortly.',
      },
      { status: 500 },
    );
  }
}
