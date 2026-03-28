'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Skill-Bridge</h1>
          <div className="flex gap-6">
            <Link href="/workers" className="hover:text-primary font-medium">
              Browse Workers
            </Link>
            <Link href="/jobs" className="hover:text-primary font-medium">
              Find Work
            </Link>
            <Link href="/auth/login" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-bold mb-4">
            Transform Your Skills Into a Recognized Profession
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect qualified skilled workers with customers who value reliability and expertise
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/register" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Start as a Professional
            </Link>
            <Link href="/auth/login" className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-primary transition">
              Find Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose Skill-Bridge?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Profiles',
                description:
                  'Build a professional profile with verified credentials and work history',
              },
              {
                title: 'Steady Income',
                description:
                  'Connect with customers actively looking for your services',
              },
              {
                title: 'Ratings & Reviews',
                description:
                  'Build trust and reputation with transparent customer feedback',
              },
              {
                title: 'Secure Payments',
                description:
                  'Safe and reliable payment system protected by industry standards',
              },
              {
                title: 'Career Growth',
                description:
                  'Access training resources and certifications to advance your career',
              },
              {
                title: 'Customer Support',
                description:
                  'Dedicated support team to help you succeed',
              },
            ].map((feature, index) => (
              <div key={index} className="card text-center">
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of professionals building their careers on Skill-Bridge
          </p>
          <Link href="/auth/register" className="px-8 py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition inline-block">
            Create Your Profile Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">Skill-Bridge</h5>
              <p className="text-gray-400">
                Transforming skilled workers into recognized professionals
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">For Workers</h5>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/resources">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">For Customers</h5>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/browse">Browse Services</Link></li>
                <li><Link href="/safety">Safety</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Skill-Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
