import { Badge } from './Badge'
import { Card } from './Card'

function StarRating({ rating }) {
  return (
    <div className="text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span className="text-slate-300 dark:text-slate-600">{'★'.repeat(5 - rating)}</span>
    </div>
  )
}

export function RecentReviewsFeed({ reviews }) {
  return (
    <Card className="animate-rise [animation-delay:160ms]">
      <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Reviews Feed</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Latest customer voices, enriched with AI tags and sentiment.</p>

      <div className="mt-4 max-h-[440px] space-y-3 overflow-y-auto pr-1 lg:max-h-[470px]">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between gap-2">
              <Badge variant={review.sentiment === 'Positive' ? 'positive' : 'negative'}>
                {review.sentiment}
              </Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400">{review.platform}</span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{review.text}</p>

            <div className="mt-3 flex items-center justify-between">
              <StarRating rating={review.rating} />
              <div className="flex flex-wrap justify-end gap-2">
                {review.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Card>
  )
}
