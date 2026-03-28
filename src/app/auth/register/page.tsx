'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<'analyst' | 'leader' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    trade: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Register:', { accountType, ...formData });
  };

  if (!accountType) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <div className="soft-panel p-8">
            <h1 className="text-3xl font-bold mb-2 text-center">EcoMetrix</h1>
            <h2 className="text-xl font-semibold mb-8 text-center text-slate-600">
              Choose your workspace role
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  type: 'analyst',
                  title: 'I am a Sustainability Analyst',
                  description:
                    'I need to track emissions, model reduction scenarios, and report progress with reliable data.',
                  icon: 'Data',
                },
                {
                  type: 'leader',
                  title: 'I am an Operations or ESG Leader',
                  description:
                    'I want portfolio-level insights, benchmarks, and executive-ready sustainability reporting.',
                  icon: 'Exec',
                },
              ].map((option) => (
                <button
                  key={option.type}
                  onClick={() => setAccountType(option.type as 'analyst' | 'leader')}
                  className="soft-panel text-left hover:shadow-xl hover:scale-[1.02] transition-all h-full cursor-pointer p-6"
                >
                  <div className="text-sm uppercase tracking-[0.14em] mb-4 text-teal-700 font-semibold">{option.icon}</div>
                  <h3 className="text-xl text-teal-800 mb-2">{option.title}</h3>
                  <p className="text-slate-600">{option.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-teal-700 font-semibold hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="soft-panel p-8">
          <button
            onClick={() => setAccountType(null)}
            className="text-slate-500 hover:text-slate-700 mb-4"
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold mb-2 text-center">EcoMetrix</h1>
          <h2 className="text-xl font-semibold mb-6 text-center text-slate-600">
            Create your {accountType === 'analyst' ? 'Analyst' : 'Leadership'} Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            {accountType === 'analyst' && (
              <div>
                <label className="block text-sm font-medium mb-2">Primary Focus Area</label>
                <select
                  value={formData.trade}
                  onChange={(e) =>
                    setFormData({ ...formData, trade: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  required
                >
                  <option value="">Select a focus area</option>
                  <option value="energy">Energy and Facilities</option>
                  <option value="procurement">Procurement and Supply Chain</option>
                  <option value="mobility">Mobility and Logistics</option>
                  <option value="reporting">Reporting and Compliance</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="text-teal-700 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-teal-700 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
