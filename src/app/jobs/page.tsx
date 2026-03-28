'use client';

import Link from 'next/link';

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: 'Bathroom Plumbing Repair',
      description: 'Need to fix leaking faucet and replace old pipes',
      category: 'Plumbing',
      budget: '$150-300',
      location: 'Downtown',
      urgency: 'Medium',
      applicants: 3,
    },
    {
      id: 2,
      title: 'Electrical Outlet Installation',
      description: 'Install 4 new outlets in kitchen',
      category: 'Electrical',
      budget: '$200-400',
      location: 'Suburbs',
      urgency: 'Low',
      applicants: 5,
    },
    {
      id: 3,
      title: 'Deck Repair and Refinishing',
      description: 'Repair damaged boards and apply new finish',
      category: 'Carpentry',
      budget: '$500-1000',
      location: 'Riverside',
      urgency: 'High',
      applicants: 7,
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container-custom py-6">
          <Link href="/" className="text-primary font-semibold mb-4 inline-block">
            ← Back Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Available Jobs</h1>
          <p className="text-gray-600 text-lg">
            Browse jobs and find your next opportunity
          </p>
        </div>
      </header>

      {/* Jobs List */}
      <section className="py-12">
        <div className="container-custom">
          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="card border-l-4 border-primary hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="text-gray-600">{job.category}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      job.urgency === 'High'
                        ? 'bg-red-100 text-red-800'
                        : job.urgency === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {job.urgency} Priority
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-600">Budget</p>
                    <p className="font-semibold text-primary">{job.budget}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-semibold">{job.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Applicants</p>
                    <p className="font-semibold">{job.applicants}</p>
                  </div>
                  <div className="flex gap-2 col-span-2 md:col-span-1">
                    <button className="btn-primary flex-1 text-sm">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
