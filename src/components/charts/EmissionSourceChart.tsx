import { SourcePoint } from '@/types/analytics';

interface EmissionSourceChartProps {
  title?: string;
  items: SourcePoint[];
}

export default function EmissionSourceChart({
  title = 'Emissions by Source',
  items,
}: EmissionSourceChartProps) {
  const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="soft-panel p-6">
      <h3 className="text-xl text-teal-800">{title}</h3>
      <div className="mt-4 space-y-4">
        {items.map((item) => {
          const ratio = total > 0 ? (item.value / total) * 100 : 0;

          return (
            <div key={item.label}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-semibold text-slate-700">{item.label}</span>
                <span className="text-slate-600">{item.value} tCO2e ({ratio.toFixed(0)}%)</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${ratio}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
