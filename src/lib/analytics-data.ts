import { AnalyticsPayload } from '@/types/analytics';

const analyticsByScope: Record<string, Omit<AnalyticsPayload, 'updatedAt'>> = {
  home: {
    impactMetrics: [
      { value: '1.26M+', label: 'kg CO2e tracked on platform' },
      { value: '39%', label: 'average reduction after 6 months' },
      { value: '470+', label: 'teams and institutions onboarded' },
    ],
    trend: [
      { label: 'Jan', value: 96 },
      { label: 'Feb', value: 92 },
      { label: 'Mar', value: 89 },
      { label: 'Apr', value: 86 },
      { label: 'May', value: 83 },
      { label: 'Jun', value: 80 },
    ],
    sources: [
      { label: 'Energy', value: 155, color: '#0f766e' },
      { label: 'Travel', value: 71, color: '#16a34a' },
      { label: 'Procurement', value: 121, color: '#65a30d' },
      { label: 'Waste', value: 42, color: '#a16207' },
    ],
  },
  workers: {
    impactMetrics: [
      { value: '83%', label: 'programs within annual reduction target' },
      { value: '214', label: 'active reduction initiatives' },
      { value: '29 tCO2e', label: 'median monthly reduction per program' },
    ],
    trend: [
      { label: 'Q1', value: 352 },
      { label: 'Q2', value: 329 },
      { label: 'Q3', value: 307 },
      { label: 'Q4', value: 286 },
    ],
    sources: [
      { label: 'Energy', value: 148, color: '#0f766e' },
      { label: 'Logistics', value: 92, color: '#16a34a' },
      { label: 'Procurement', value: 118, color: '#65a30d' },
      { label: 'Waste', value: 40, color: '#a16207' },
    ],
  },
  jobs: {
    impactMetrics: [
      { value: '27', label: 'available decarbonization playbooks' },
      { value: '11.2x', label: 'median annual ROI for executed actions' },
      { value: '34%', label: 'average implementation time reduction' },
    ],
    trend: [
      { label: 'Q1', value: 124 },
      { label: 'Q2', value: 112 },
      { label: 'Q3', value: 99 },
      { label: 'Q4', value: 90 },
    ],
    sources: [
      { label: 'Facilities', value: 47, color: '#0f766e' },
      { label: 'Procurement', value: 26, color: '#16a34a' },
      { label: 'Mobility', value: 18, color: '#84cc16' },
      { label: 'Waste', value: 9, color: '#a16207' },
    ],
  },
  dashboard: {
    impactMetrics: [
      { value: '68%', label: 'reduction goal progress' },
      { value: '12.4 tCO2e', label: 'this month reduction' },
      { value: '6', label: 'weeks of continuous improvement' },
    ],
    trend: [
      { label: 'Jan', value: 88 },
      { label: 'Feb', value: 86 },
      { label: 'Mar', value: 84 },
      { label: 'Apr', value: 81 },
      { label: 'May', value: 79 },
      { label: 'Jun', value: 76 },
    ],
    sources: [
      { label: 'Electricity', value: 52, color: '#0f766e' },
      { label: 'Fuel and Heating', value: 34, color: '#16a34a' },
      { label: 'Travel', value: 18, color: '#84cc16' },
      { label: 'Waste', value: 9, color: '#a16207' },
    ],
  },
  contact: {
    impactMetrics: [
      { value: '24h', label: 'average first response time' },
      { value: '91%', label: 'teams onboarded within 2 weeks' },
      { value: '3', label: 'implementation tracks available' },
    ],
    trend: [
      { label: 'M1', value: 140 },
      { label: 'M2', value: 131 },
      { label: 'M3', value: 123 },
      { label: 'M4', value: 115 },
    ],
    sources: [
      { label: 'Energy Efficiency', value: 45, color: '#0f766e' },
      { label: 'Travel Optimization', value: 22, color: '#16a34a' },
      { label: 'Procurement Improvements', value: 18, color: '#84cc16' },
      { label: 'Waste Reduction', value: 15, color: '#a16207' },
    ],
  },
};

export function getAnalyticsPayload(scope: string): AnalyticsPayload {
  const selected = analyticsByScope[scope] ?? analyticsByScope.home;

  return {
    ...selected,
    updatedAt: new Date().toISOString(),
  };
}
