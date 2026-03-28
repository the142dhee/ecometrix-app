import { NextResponse } from 'next/server';
import { getAnalyticsPayload } from '@/lib/analytics-data';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const scope = url.searchParams.get('scope') ?? 'home';

  return NextResponse.json({
    success: true,
    scope,
    data: getAnalyticsPayload(scope),
  });
}
