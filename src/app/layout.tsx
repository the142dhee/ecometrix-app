import type { Metadata } from 'next';
import { Space_Grotesk, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
});

export const metadata: Metadata = {
  title: 'EcoMetrix | Measure, Analyze, Reduce Carbon Footprint',
  description:
    'EcoMetrix helps people, organizations, and institutions measure, analyze, and reduce carbon footprint with data-driven insights and smart analytics.',
  keywords: [
    'carbon footprint',
    'sustainability analytics',
    'emissions dashboard',
    'climate reporting',
    'esg insights',
  ],
  openGraph: {
    title: 'EcoMetrix | Measure, Analyze, Reduce Carbon Footprint',
    description:
      'Turn sustainability data into action with EcoMetrix dashboards, benchmarking, and reduction roadmaps.',
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
      <body className={`${spaceGrotesk.variable} ${sourceSerif.variable}`}>{children}</body>
    </html>
  );
}
