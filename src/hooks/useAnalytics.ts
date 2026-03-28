'use client';

import { useEffect, useState } from 'react';
import { AnalyticsPayload } from '@/types/analytics';

interface AnalyticsResponse {
  success: boolean;
  data: AnalyticsPayload;
}

export function useAnalytics(scope: string, fallback: AnalyticsPayload) {
  const [data, setData] = useState<AnalyticsPayload>(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/analytics?scope=${encodeURIComponent(scope)}`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Failed to load analytics data');
        }

        const payload = (await response.json()) as AnalyticsResponse;

        if (isMounted && payload.success) {
          setData(payload.data);
          setError('');
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown analytics error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, [scope]);

  return { data, loading, error };
}
