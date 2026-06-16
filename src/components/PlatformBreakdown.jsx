import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Card } from './Card'

export function PlatformBreakdown({ platforms }) {
  const worstPlatform = [...platforms].sort((a, b) => b.negativePercent - a.negativePercent)[0]?.platform

  return (
    <Card className="animate-rise [animation-delay:120ms]">
      <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">Platform Breakdown</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Compare rating quality and negative concentration by channel.
      </p>

      <div className="mt-4 space-y-3">
        {platforms.map((item) => {
          const isWorst = item.platform === worstPlatform
          return (
            <div
              key={item.platform}
              className={`rounded-xl border p-4 ${
                isWorst
                  ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
                  : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{item.platform}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Avg rating {item.avgRating.toFixed(1)}★</p>
                </div>

                {isWorst ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-red-300 bg-white px-2 py-1 text-xs font-medium text-red-700 dark:border-red-700 dark:bg-red-900/20 dark:text-red-300">
                    <ExclamationTriangleIcon className="h-3.5 w-3.5" />
                    Needs attention
                  </span>
                ) : null}
              </div>

              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Negative reviews</span>
                  <span>{item.negativePercent}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`h-2 rounded-full ${isWorst ? 'bg-red-500' : 'bg-emerald-500'}`}
                    style={{ width: `${item.negativePercent}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
