'use client';

import { TrendPoint } from '@/types/analytics';

interface EmissionsTrendChartProps {
  title?: string;
  series: TrendPoint[];
}

export default function EmissionsTrendChart({
  title = '12-Month Emissions Trend',
  series,
}: EmissionsTrendChartProps) {
  const width = 560;
  const height = 220;
  const chartPadding = 24;

  const maxValue = Math.max(...series.map((point) => point.value));
  const minValue = Math.min(...series.map((point) => point.value));
  const span = Math.max(maxValue - minValue, 1);

  const toX = (index: number) =>
    chartPadding + (index * (width - chartPadding * 2)) / Math.max(series.length - 1, 1);

  const toY = (value: number) =>
    height - chartPadding - ((value - minValue) / span) * (height - chartPadding * 2);

  const points = series.map((point, index) => `${toX(index)},${toY(point.value)}`).join(' ');

  return (
    <div className="soft-panel p-6">
      <h3 className="text-xl text-teal-800">{title}</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full mt-4" role="img" aria-label={title}>
        <defs>
          <linearGradient id="trendStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        <line x1={chartPadding} y1={height - chartPadding} x2={width - chartPadding} y2={height - chartPadding} stroke="#cbd5e1" strokeWidth="1" />
        <line x1={chartPadding} y1={chartPadding} x2={chartPadding} y2={height - chartPadding} stroke="#cbd5e1" strokeWidth="1" />

        <polyline fill="none" stroke="url(#trendStroke)" strokeWidth="3" points={points} strokeLinecap="round" strokeLinejoin="round" />

        {series.map((point, index) => (
          <g key={point.label}>
            <circle cx={toX(index)} cy={toY(point.value)} r="4" fill="#0f766e" />
            <text x={toX(index)} y={height - 8} textAnchor="middle" className="fill-slate-500 text-[10px]">
              {point.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="text-sm text-slate-600 mt-3">Trend shown in tCO2e by month.</p>
    </div>
  );
}
