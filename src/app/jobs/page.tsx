'use client';

import Link from 'next/link';
import EmissionsTrendChart from '@/components/charts/EmissionsTrendChart';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getAnalyticsPayload } from '@/lib/analytics-data';

const jobsFallback = getAnalyticsPayload('jobs');

export default function JobsPage() {
  const { data } = useAnalytics('jobs', jobsFallback);

  const playbooks = [
    {
      id: 1,
      title: 'Facility Electrification Sprint',
      description: 'Replace legacy fossil fuel systems with electrified alternatives and monitor monthly impact.',
      category: 'Operations',
      timeline: '12 weeks',
      impact: '44 tCO2e',
      complexity: 'Medium',
    },
    {
      id: 2,
      title: 'Supply Chain Emissions Audit',
      description: 'Map top suppliers, estimate Scope 3 impact, and prioritize partner transition opportunities.',
      category: 'Procurement',
      timeline: '8 weeks',
      impact: '29 tCO2e',
      complexity: 'High',
    },
    {
      id: 3,
      title: 'Mobility Emissions Optimizer',
      description: 'Reduce travel emissions with policy updates, route redesign, and behavior nudges.',
      category: 'Transport',
      timeline: '10 weeks',
      impact: '37 tCO2e',
      complexity: 'Low',
    },
  ];

  return (
    <div className="pb-12">
      <header className="site-nav">
        <div className="container-custom py-6">
          <Link href="/" className="text-teal-700 font-semibold mb-4 inline-block hover:text-teal-800">
            ← Back to EcoMetrix
          </Link>
          <h1 className="text-4xl font-bold mb-2">Decarbonization Action Library</h1>
          <p className="text-slate-600 text-lg">
            Select ready-to-run intervention playbooks and estimate measurable reduction outcomes.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="space-y-6">
              {playbooks.map((playbook) => (
              <div
                key={playbook.id}
                className="soft-panel p-6 border-l-4 border-teal-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-800">{playbook.title}</h3>
                    <p className="text-slate-600">{playbook.category}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      playbook.complexity === 'High'
                        ? 'bg-red-100 text-red-800'
                        : playbook.complexity === 'Medium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {playbook.complexity} Complexity
                  </span>
                </div>

                <p className="text-slate-700 mb-4">{playbook.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-slate-500">Timeline</p>
                    <p className="font-semibold text-slate-800">{playbook.timeline}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Projected Impact</p>
                    <p className="font-semibold text-emerald-700">{playbook.impact}</p>
                  </div>
                  <div className="col-span-2 md:col-span-2">
                    <button className="btn-primary text-sm">
                      Start Playbook
                    </button>
                  </div>
                </div>
              </div>
            ))}
            </div>

            <EmissionsTrendChart
              title="Quarterly Impact Projection"
              series={data.trend}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
