import nodemailer from 'nodemailer';
import { ContactSubmissionRecord } from '@/types/contact';

function getTransport() {
  const host = process.env.EMAIL_SERVER_HOST;
  const port = Number(process.env.EMAIL_SERVER_PORT ?? '587');
  const user = process.env.EMAIL_SERVER_USER;
  const pass = process.env.EMAIL_SERVER_PASSWORD;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactNotification(submission: ContactSubmissionRecord) {
  const transporter = getTransport();

  if (!transporter) {
    console.log('Email notification skipped: SMTP credentials are not configured.');
    return { sent: false };
  }

  const from = process.env.EMAIL_FROM ?? process.env.EMAIL_SERVER_USER;
  const to = process.env.CONTACT_NOTIFY_TO ?? process.env.EMAIL_SERVER_USER;

  if (!from || !to) {
    console.log('Email notification skipped: sender or recipient is not configured.');
    return { sent: false };
  }

  await transporter.sendMail({
    from,
    to,
    subject: `EcoMetrix contact request ${submission.referenceId}`,
    text: [
      `Reference: ${submission.referenceId}`,
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Organization: ${submission.organization}`,
      `Role: ${submission.role}`,
      '',
      submission.message,
    ].join('\n'),
    html: `
      <h2>New EcoMetrix Contact Request</h2>
      <p><strong>Reference:</strong> ${submission.referenceId}</p>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Organization:</strong> ${submission.organization}</p>
      <p><strong>Role:</strong> ${submission.role}</p>
      <p><strong>Message:</strong><br/>${submission.message.replace(/\n/g, '<br/>')}</p>
    `,
  });

  return { sent: true };
}
