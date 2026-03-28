'use client';

import { FormEvent, useState } from 'react';

interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
}

const initialPayload: ContactPayload = {
  name: '',
  email: '',
  organization: '',
  role: '',
  message: '',
};

export default function ContactForm() {
  const [payload, setPayload] = useState<ContactPayload>(initialPayload);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setResponseMessage('Submitting your request...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success: boolean;
        message: string;
        referenceId?: string;
      };

      if (!response.ok || !data.success) {
        setStatus('error');
        setResponseMessage(data.message || 'Unable to submit your request right now.');
        return;
      }

      setStatus('success');
      setPayload(initialPayload);
      setResponseMessage(`${data.message} Ref: ${data.referenceId ?? 'N/A'}`);
    } catch {
      setStatus('error');
      setResponseMessage('Network issue detected. Please try again in a moment.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="soft-panel p-7 space-y-4">
      <h3 className="text-2xl text-teal-800">Talk to the EcoMetrix team</h3>
      <p className="text-sm text-slate-600">Share your sustainability goals and we will follow up with a tailored demo.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full name"
          value={payload.name}
          onChange={(event) => setPayload({ ...payload, name: event.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white/90"
          required
        />
        <input
          type="email"
          placeholder="Work email"
          value={payload.email}
          onChange={(event) => setPayload({ ...payload, email: event.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white/90"
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Organization"
          value={payload.organization}
          onChange={(event) => setPayload({ ...payload, organization: event.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white/90"
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={payload.role}
          onChange={(event) => setPayload({ ...payload, role: event.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white/90"
          required
        />
      </div>

      <textarea
        placeholder="What emissions goals are you trying to hit this year?"
        value={payload.message}
        onChange={(event) => setPayload({ ...payload, message: event.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white/90 min-h-32"
        required
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Contact Request'}
      </button>

      <p
        className={`text-sm ${
          status === 'success'
            ? 'text-emerald-700'
            : status === 'error'
              ? 'text-red-700'
              : 'text-slate-500'
        }`}
      >
        {responseMessage || 'Responses are typically sent within one business day.'}
      </p>
    </form>
  );
}
