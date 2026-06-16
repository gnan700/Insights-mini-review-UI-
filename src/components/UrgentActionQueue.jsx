import { Badge } from './Badge'
import { Button } from './Button'
import { Card } from './Card'

export function UrgentActionQueue({ items }) {
  return (
    <Card className="animate-rise [animation-delay:140ms]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">Urgent Action Queue</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">High-priority negative reviews that need immediate response.</p>
        </div>
        <Badge variant="negative">{items.length} open cases</Badge>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/40"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="negative">{item.sentiment}</Badge>
              <Badge variant={item.priority.toLowerCase() === 'high' ? 'high' : 'medium'}>{item.priority}</Badge>
              <Badge>{item.platform}</Badge>
              <span className="ml-auto text-xs text-slate-500 dark:text-slate-400">{item.timestamp}</span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{item.text}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button>Reply</Button>
              <Button variant="secondary">Mark Resolved</Button>
            </div>
          </article>
        ))}
      </div>
    </Card>
  )
}
