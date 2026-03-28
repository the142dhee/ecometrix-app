'use client';

import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import EmissionsTrendChart from '@/components/charts/EmissionsTrendChart';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getAnalyticsPayload } from '@/lib/analytics-data';

const homeFallback = getAnalyticsPayload('home');

const solutionPillars = [
  {
    title: 'Footprint Measurement',
    description:
      'Capture emissions across energy, travel, procurement, logistics, and waste using structured data pipelines.',
  },
  {
    title: 'Smart Analytics',
    description:
      'Turn raw sustainability data into clear hotspots, trend alerts, and actionable reduction opportunities.',
  },
  {
    title: 'Reduction Roadmaps',
    description:
      'Build practical timelines with prioritized actions, projected impact, and progress tracking by initiative.',
  },
  {
    title: 'Reporting and Compliance',
    description:
      'Export evidence-ready reports aligned with ESG and climate disclosure needs for stakeholders.',
  },
];

const audience = [
  'Individuals building greener daily habits',
  'Organizations optimizing operations and costs',
  'Institutions tracking portfolio-wide climate performance',
];

export default function Home() {
  const { data } = useAnalytics('home', homeFallback);

  return (
    <main className="text-[var(--eco-ink)]">
      <nav className="site-nav sticky top-0 z-50">
        <div className="container-custom py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700" />
            <p className="text-xl font-semibold tracking-tight">EcoMetrix</p>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#solutions" className="hover:text-teal-700">Solutions</a>
            <a href="#impact" className="hover:text-teal-700">Impact</a>
            <a href="#contact" className="hover:text-teal-700">Contact</a>
          </div>
          <Link href="/auth/register" className="btn-secondary text-sm">
            Get Started
          </Link>
        </div>
      </nav>

      <section className="pt-14 pb-12">
        <div className="container-custom hero-grid items-stretch">
          <div className="fade-up">
            <p className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              Data-driven sustainability intelligence
            </p>
            <h1 className="text-5xl sm:text-6xl mt-6 leading-tight max-w-2xl">
              Measure. Analyze. Reduce.
            </h1>
            <p className="text-lg mt-5 max-w-xl text-slate-700">
              EcoMetrix helps individuals, organizations, and institutions understand their carbon footprint and cut emissions with clear insights and smart analytics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Request a Demo
              </a>
              <a href="#solutions" className="btn-secondary">
                Explore Platform
              </a>
            </div>
          </div>

          <div className="soft-panel p-6 sm:p-8 metrics-card fade-up fade-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">Live Snapshot</p>
            <div className="mt-6 space-y-5">
              {data.impactMetrics.map((item) => (
                <div key={item.label} className="border-b border-emerald-100 pb-4 last:border-none">
                  <p className="text-3xl font-bold text-teal-800">{item.value}</p>
                  <p className="text-sm text-slate-700 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Aggregated platform data from active EcoMetrix partners.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-12">
        <div className="container-custom">
          <div className="fade-up fade-delay-2">
            <h2 className="text-4xl">Everything needed to move from carbon data to climate action</h2>
            <p className="mt-3 text-slate-700 max-w-3xl">
              EcoMetrix combines measurement, analytics, and execution tools in one platform so teams can stop guessing and start reducing emissions with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {solutionPillars.map((pillar) => (
              <div key={pillar.title} className="soft-panel p-6">
                <h3 className="text-2xl text-teal-800">{pillar.title}</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-12">
        <div className="container-custom soft-panel p-7 md:p-10">
          <h2 className="text-3xl">Who EcoMetrix supports</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {audience.map((item) => (
              <div key={item} className="rounded-2xl border border-emerald-100 p-5 bg-white/80">
                <p className="font-semibold text-teal-900">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-700 text-white">
            <p className="text-sm uppercase tracking-[0.12em] font-semibold">Outcome-first execution</p>
            <p className="text-lg mt-2 max-w-3xl">
              From baseline assessment to measurable reduction, our analytics engine highlights your highest-impact interventions and tracks progress continuously.
            </p>
          </div>

          <div className="mt-8">
            <EmissionsTrendChart
              title="Sample Reduction Curve"
              series={data.trend}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-6">
            <ContactForm />

            <div className="soft-panel p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-800">Contact</p>
              <p className="mt-3 text-lg font-semibold">team@ecometrix.io</p>
              <p className="text-sm mt-1 text-slate-600">+1 (800) 430-2040</p>
              <p className="text-sm mt-6 text-slate-700">
                52 Greenway Plaza
                <br />
                Suite 410
                <br />
                Austin, TX 78701
              </p>
              <div className="mt-7 flex gap-3 flex-wrap">
                <Link href="/auth/register" className="btn-primary">Create Account</Link>
                <Link href="/auth/login" className="btn-secondary">Sign In</Link>
              </div>
              <div className="mt-3">
                <Link href="/contact" className="text-teal-700 font-semibold hover:text-teal-800">
                  Open dedicated contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-100 py-8">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-sm text-slate-600">
          <p>2026 EcoMetrix. Climate progress, backed by data.</p>
          <div className="flex gap-6">
            <div>
              <a href="#solutions" className="hover:text-teal-700">Solutions</a>
            </div>
            <div>
              <a href="#impact" className="hover:text-teal-700">Impact</a>
            </div>
            <div>
              <a href="#contact" className="hover:text-teal-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
