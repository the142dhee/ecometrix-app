'use client';

import Link from 'next/link';
import { useState } from 'react';
import EmissionSourceChart from '@/components/charts/EmissionSourceChart';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getAnalyticsPayload } from '@/lib/analytics-data';

const workersFallback = getAnalyticsPayload('workers');

export default function WorkersPage() {
  const [selectedSegment, setSelectedSegment] = useState<string>('all');
  const { data } = useAnalytics('workers', workersFallback);

  const programs = [
    {
      id: 1,
      name: 'Urban Manufacturing Group',
      segment: 'industry',
      baseline: 422,
      current: 316,
      reduction: '25%',
      focus: 'Process heat and supplier emissions optimization',
    },
    {
      id: 2,
      name: 'North Valley University',
      segment: 'institution',
      baseline: 288,
      current: 230,
      reduction: '20%',
      focus: 'Campus energy and transportation footprint tracking',
    },
    {
      id: 3,
      name: 'Helios Retail Chain',
      segment: 'enterprise',
      baseline: 364,
      current: 295,
      reduction: '19%',
      focus: 'Store energy benchmarking and refrigeration upgrades',
    },
  ];

  const filteredPrograms =
    selectedSegment === 'all'
      ? programs
      : programs.filter((program) => program.segment === selectedSegment);

  return (
    <div className="pb-12">
      <header className="site-nav">
        <div className="container-custom py-6">
          <Link href="/" className="text-teal-700 font-semibold mb-4 inline-block hover:text-teal-800">
            ← Back to EcoMetrix
          </Link>
          <h1 className="text-4xl font-bold mb-2">Sector Programs</h1>
          <p className="text-slate-600 text-lg">
            Explore active carbon reduction programs by sector and benchmark their progress.
          </p>
        </div>
      </header>

      <section className="py-8">
        <div className="container-custom">
          <div className="flex gap-4 flex-wrap">
            {['all', 'industry', 'institution', 'enterprise'].map((segment) => (
              <button
                key={segment}
                onClick={() => setSelectedSegment(segment)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedSegment === segment
                    ? 'bg-teal-700 text-white'
                    : 'bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-200'
                }`}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="space-y-5">
              {filteredPrograms.map((program) => (
                <div key={program.id} className="soft-panel p-6">
                  <div>
                    <h3 className="text-2xl text-teal-800">{program.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{program.focus}</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-5 text-sm">
                    <div>
                      <p className="text-slate-500">Baseline</p>
                      <p className="font-bold text-lg">{program.baseline} tCO2e</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Current</p>
                      <p className="font-bold text-lg">{program.current} tCO2e</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Reduction</p>
                      <p className="font-bold text-lg text-emerald-700">{program.reduction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <EmissionSourceChart
              title="Portfolio Emissions Mix"
              items={data.sources}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
