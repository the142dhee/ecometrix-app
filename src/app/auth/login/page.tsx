'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="soft-panel p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">EcoMetrix</h1>
          <h2 className="text-xl font-semibold mb-6 text-center text-slate-600">
            Sign in to your sustainability workspace
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organization.com"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Don't have an account?{' '}
              <Link href="/auth/register" className="text-teal-700 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-slate-600 hover:text-teal-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
