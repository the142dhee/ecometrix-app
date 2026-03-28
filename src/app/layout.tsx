import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skill-Bridge | Verified Professional Services',
  description:
    'Transform your skilled work into recognized professions. Connect qualified workers with customers for steady income and reliable service.',
  keywords: [
    'skilled workers',
    'plumbers',
    'electricians',
    'verified professionals',
    'home services',
  ],
  openGraph: {
    title: 'Skill-Bridge | Verified Professional Services',
    description:
      'Transform your skilled work into recognized professions. Connect qualified workers with customers for steady income and reliable service.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
