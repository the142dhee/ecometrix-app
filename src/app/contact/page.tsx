'use client';

import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import EmissionSourceChart from '@/components/charts/EmissionSourceChart';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getAnalyticsPayload } from '@/lib/analytics-data';

const contactFallback = getAnalyticsPayload('contact');

export default function ContactPage() {
  const { data } = useAnalytics('contact', contactFallback);

  return (
    <main className="py-10 pb-14">
      <div className="container-custom">
        <Link href="/" className="text-teal-700 font-semibold hover:text-teal-800">
          ← Back to Home
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mt-6">
          <ContactForm />

          <div className="space-y-6">
            <div className="soft-panel p-7">
              <p className="text-sm uppercase tracking-[0.14em] text-teal-700 font-semibold">Direct Contact</p>
              <h1 className="text-3xl mt-3">Book your EcoMetrix onboarding call</h1>
              <p className="text-slate-700 mt-3">
                We usually respond in under 24 hours with recommended setup steps for your team.
              </p>
              <p className="text-slate-700 mt-5">team@ecometrix.io</p>
              <p className="text-slate-700">+1 (800) 430-2040</p>
            </div>

            <EmissionSourceChart
              title="Typical First-Year Savings Mix"
              items={data.sources}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
