# EcoMetrix - Sustainability Analytics Platform

## Overview

EcoMetrix is a full-stack sustainability platform that helps individuals, organizations, and institutions measure, analyze, and reduce carbon emissions with data-driven insights. The platform enables:

- **Individuals**: Track personal footprint and identify practical reduction actions
- **Organizations**: Monitor operational emissions and prioritize high-impact interventions
- **Institutions**: Aggregate portfolio-level climate metrics and improve compliance reporting

## Features

- ✅ User Authentication (Workers & Customers)
- ✅ Verified Professional Profiles
- ✅ Service Listings & Job Matching
- ✅ Rating & Review System
- ✅ Job Posting & Application System
- ✅ Secure Payment Processing
- ✅ Real-time Notifications
- ✅ Worker & Customer Dashboards
- ✅ Advanced Search & Filtering
- ✅ Career Growth Resources

## Tech Stack

### Frontend
- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation

### Backend
- **API**: Next.js API Routes
- **Database**: PostgreSQL (to be configured)
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io

### Integrations
- **Payments**: Stripe
- **Storage**: File upload management
- **Email**: Nodemailer (for notifications)

## Project Structure

```
ecometrix/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── auth/           # Authentication pages (login, register)
│   │   ├── workers/        # Worker listings page
│   │   ├── jobs/           # Job listings page
│   │   ├── dashboard/      # User dashboard
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   ├── lib/               # Utility functions and helpers
│   ├── hooks/             # Custom React hooks
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── next.config.js         # Next.js configuration
└── .eslintrc.json         # ESLint configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- PostgreSQL database
- Stripe account (optional, for payments)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   DATABASE_URL=postgresql://user:password@localhost/skill_bridge
   NEXTAUTH_SECRET=your_secret_key_here
   NEXTAUTH_URL=http://localhost:3000
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

### Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with features overview |
| `/auth/login` | User login |
| `/auth/register` | User registration (worker or customer) |
| `/workers` | Browse verified workers by trade |
| `/jobs` | Browse available job opportunities |
| `/dashboard` | User dashboard (after login) |

## API Endpoints (To Be Implemented)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Workers
- `GET /api/workers` - List all workers
- `GET /api/workers/:id` - Get worker details
- `PUT /api/workers/:id` - Update worker profile
- `POST /api/workers/:id/verify` - Verify worker (admin)

### Jobs
- `GET /api/jobs` - List all jobs
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `POST /api/jobs/:id/apply` - Apply for job

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/webhook` - Stripe webhook

## Database Schema (To Be Implemented)

### Tables
- `users` - User accounts (workers & customers)
- `workers` - Worker profiles with verification status
- `jobs` - Job listings
- `applications` - Job applications
- `reviews` - Ratings and reviews
- `payments` - Transaction history
- `notifications` - User notifications

## Security Considerations

- ✅ Environment variables for sensitive data
- 🔄 Role-based access control (RBAC) - To be implemented
- 🔄 JWT token authentication - To be implemented
- 🔄 Rate limiting - To be implemented
- 🔄 Input validation and sanitization - To be implemented
- 🔄 CSRF protection - To be implemented

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t ecometrix .
docker run -p 3000:3000 ecometrix
```

### Traditional Server
```bash
npm run build
npm start
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@ecometrix.io or open an issue on GitHub.

---

**Built with ❤️ for skilled professionals everywhere**
