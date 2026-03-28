import { listContactSubmissions } from '@/lib/contact-store';

export const dynamic = 'force-dynamic';

interface AdminContactsPageProps {
  searchParams: {
    key?: string;
  };
}

export default async function AdminContactsPage({ searchParams }: AdminContactsPageProps) {
  const expectedKey = process.env.ADMIN_DASHBOARD_KEY;

  if (expectedKey && searchParams.key !== expectedKey) {
    return (
      <main className="py-10">
        <div className="container-custom">
          <div className="soft-panel p-8">
            <h1 className="text-3xl text-teal-800">Admin Access Required</h1>
            <p className="text-slate-700 mt-3">
              Add the admin key as a query parameter to open this page.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const submissions = await listContactSubmissions(100);

  return (
    <main className="py-10 pb-14">
      <div className="container-custom">
        <div className="soft-panel p-8">
          <h1 className="text-3xl text-teal-800">Contact Requests</h1>
          <p className="text-slate-700 mt-2">Latest submissions from EcoMetrix forms.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-emerald-200 text-left text-slate-600">
                  <th className="py-2 pr-4">Reference</th>
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Email</th>
                  <th className="py-2 pr-4">Organization</th>
                  <th className="py-2 pr-4">Role</th>
                  <th className="py-2 pr-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id} className="border-b border-emerald-100 align-top">
                    <td className="py-3 pr-4 font-semibold text-teal-800">{submission.referenceId}</td>
                    <td className="py-3 pr-4">{submission.name}</td>
                    <td className="py-3 pr-4">{submission.email}</td>
                    <td className="py-3 pr-4">{submission.organization}</td>
                    <td className="py-3 pr-4">{submission.role}</td>
                    <td className="py-3 pr-4 whitespace-nowrap">{new Date(submission.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {submissions.length === 0 && (
            <p className="text-slate-600 mt-4">No contact requests yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
