export interface TrendPoint {
  label: string;
  value: number;
}

export interface SourcePoint {
  label: string;
  value: number;
  color: string;
}

export interface MetricPoint {
  value: string;
  label: string;
}

export interface AnalyticsPayload {
  impactMetrics: MetricPoint[];
  trend: TrendPoint[];
  sources: SourcePoint[];
  updatedAt: string;
}
