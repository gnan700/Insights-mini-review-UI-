import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
import { Card } from './Card'

function KpiCard({ title, value, suffix, delta, trend }) {
  const isUp = trend === 'up'

  return (
    <Card className="animate-rise [animation-delay:40ms]">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <p className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {value}
        {suffix ? <span className="ml-1 text-2xl">{suffix}</span> : null}
      </p>
      <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium">
        {isUp ? (
          <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-500" />
        ) : (
          <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />
        )}
        <span className={isUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}>
          {delta}
        </span>
      </div>
    </Card>
  )
}

export function KpiGrid({ cards }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <KpiCard key={card.title} {...card} />
      ))}
    </section>
  )
}
