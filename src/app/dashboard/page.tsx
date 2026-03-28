'use client';

import Link from 'next/link';
import EmissionSourceChart from '@/components/charts/EmissionSourceChart';
import EmissionsTrendChart from '@/components/charts/EmissionsTrendChart';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getAnalyticsPayload } from '@/lib/analytics-data';

const dashboardFallback = getAnalyticsPayload('dashboard');

export default function DashboardPage() {
  const { data } = useAnalytics('dashboard', dashboardFallback);

  return (
    <div className="min-h-screen">
      <header className="site-nav">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-800">EcoMetrix Dashboard</h1>
          <Link href="/" className="text-slate-600 hover:text-teal-700 font-medium">
            Back Home
          </Link>
        </div>
      </header>

      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="soft-panel text-center p-6">
              <h3 className="text-slate-600 text-sm font-medium mb-2 uppercase tracking-[0.1em]">
                Reduction Goal Progress
              </h3>
              <div className="bg-emerald-100 h-2 rounded-full mb-4">
                <div
                  className="bg-emerald-600 h-2 rounded-full"
                  style={{ width: data.impactMetrics[0]?.value ?? '68%' }}
                ></div>
              </div>
              <p className="text-3xl font-bold text-emerald-700">{data.impactMetrics[0]?.value ?? '68%'}</p>
            </div>

            <div className="soft-panel text-center p-6">
              <h3 className="text-slate-600 text-sm font-medium mb-2 uppercase tracking-[0.1em]">
                This Month Reduction
              </h3>
              <p className="text-4xl font-bold text-teal-700">{data.impactMetrics[1]?.value ?? '12.4 tCO2e'}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <EmissionsTrendChart title="Monthly Emissions Trend" series={data.trend} />

            <EmissionSourceChart
              title="Current Emissions Distribution"
              items={data.sources}
            />
          </div>

          <div className="soft-panel p-6 mt-6">
            <h2 className="text-2xl text-teal-800 mb-4">Recent Sustainability Activity</h2>
            <div className="space-y-3">
              {[
                'Energy benchmark refresh completed for 24 facilities.',
                'Fleet routing policy update projected to save 3.1 tCO2e/month.',
                'Supplier emissions data synced from procurement system.',
              ].map((activity) => (
                <div key={activity} className="border-l-4 border-emerald-500 pl-4 py-2 bg-white/60 rounded-r-lg">
                  <p className="text-slate-700">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
