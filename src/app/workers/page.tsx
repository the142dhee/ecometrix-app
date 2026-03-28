'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function WorkersPage() {
  const [selectedTrade, setSelectedTrade] = useState<string>('all');

  const workers = [
    {
      id: 1,
      name: 'John Smith',
      trade: 'Plumbing',
      rating: 4.9,
      reviews: 128,
      description: 'Expert plumber with 15+ years of experience',
      verified: true,
      price: '$85/hr',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      trade: 'Electrical',
      rating: 4.8,
      reviews: 95,
      description: 'Licensed electrician specializing in residential work',
      verified: true,
      price: '$95/hr',
    },
    {
      id: 3,
      name: 'Mike Wilson',
      trade: 'Carpentry',
      rating: 4.7,
      reviews: 82,
      description: 'Quality carpentry and custom woodwork',
      verified: true,
      price: '$75/hr',
    },
  ];

  const filteredWorkers =
    selectedTrade === 'all'
      ? workers
      : workers.filter((w) => w.trade.toLowerCase() === selectedTrade);

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container-custom py-6">
          <Link href="/" className="text-primary font-semibold mb-4 inline-block">
            ← Back Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Find Skilled Professionals</h1>
          <p className="text-gray-600 text-lg">
            Browse verified and rated professionals ready to help
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-gray-50 py-8">
        <div className="container-custom">
          <div className="flex gap-4 flex-wrap">
            {['all', 'plumbing', 'electrical', 'carpentry'].map((trade) => (
              <button
                key={trade}
                onClick={() => setSelectedTrade(trade)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedTrade === trade
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {trade.charAt(0).toUpperCase() + trade.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Workers Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkers.map((worker) => (
              <div key={worker.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{worker.name}</h3>
                    <p className="text-sm text-gray-600">{worker.trade}</p>
                  </div>
                  {worker.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{worker.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold">{worker.rating}</span>
                  <span className="text-gray-600 text-sm">
                    ({worker.reviews} reviews)
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{worker.price}</span>
                  <button className="btn-primary text-sm">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
