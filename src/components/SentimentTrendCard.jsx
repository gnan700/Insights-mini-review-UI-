import { Card } from './Card'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export function SentimentTrendCard({ points }) {
  const chartData = points.map((value, index) => ({
    label: `W${Math.floor(index / 3) + 1}-D${(index % 3) + 1}`,
    score: value,
  }))

  return (
    <Card className="animate-rise [animation-delay:80ms]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">
            Sentiment Trend
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Daily score trajectory over the last 12 periods</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950/50">
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.12} />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#64748b', fontSize: 11 }}
                interval={2}
              />
              <YAxis
                domain={['dataMin - 2', 'dataMax + 2']}
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#64748b', fontSize: 11 }}
                width={30}
              />
              <Tooltip
                cursor={{ stroke: '#0f766e', strokeOpacity: 0.35 }}
                contentStyle={{
                  borderRadius: '0.75rem',
                  borderColor: '#334155',
                  backgroundColor: '#0f172a',
                  color: '#e2e8f0',
                }}
                labelStyle={{ color: '#a5b4fc' }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#lineGradient)"
                dot={{ fill: '#10b981', r: 3, strokeWidth: 0 }}
                activeDot={{ r: 5, fill: '#06b6d4' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-1 flex justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </Card>
  )
}
