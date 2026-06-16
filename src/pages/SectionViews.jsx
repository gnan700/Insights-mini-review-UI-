import { BellAlertIcon, ChartPieIcon, Cog8ToothIcon, InboxStackIcon } from '@heroicons/react/24/outline'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { PlatformBreakdown } from '../components/PlatformBreakdown'
import { RecentReviewsFeed } from '../components/RecentReviewsFeed'
import { SentimentTrendCard } from '../components/SentimentTrendCard'
import { UrgentActionQueue } from '../components/UrgentActionQueue'

function SectionHero({ icon: Icon, title, subtitle }) {
  return (
    <Card className="animate-rise">
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50">
          <Icon className="h-6 w-6 text-emerald-500" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
      </div>
    </Card>
  )
}

export function ReviewsView({ recentReviews }) {
  return (
    <section className="space-y-6">
      <SectionHero
        icon={InboxStackIcon}
        title="Reviews"
        subtitle="Track incoming customer voice across channels and triage fast."
      />
      <RecentReviewsFeed reviews={recentReviews} />
    </section>
  )
}

export function InsightsView({ sentimentTrend, platformStats }) {
  return (
    <section className="space-y-6">
      <SectionHero
        icon={ChartPieIcon}
        title="Insights"
        subtitle="AI surfaces trends that impact retention, quality, and revenue."
      />
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SentimentTrendCard points={sentimentTrend} />
        </div>
        <PlatformBreakdown platforms={platformStats} />
      </div>
    </section>
  )
}

export function AlertsView({ urgentQueue }) {
  return (
    <section className="space-y-6">
      <SectionHero
        icon={BellAlertIcon}
        title="Alerts"
        subtitle="Escalations grouped by urgency so support can act before churn risk grows."
      />
      <UrgentActionQueue items={urgentQueue} />
    </section>
  )
}

export function SettingsView({ darkMode, onToggleDarkMode }) {
  return (
    <section className="space-y-6">
      <SectionHero
        icon={Cog8ToothIcon}
        title="Settings"
        subtitle="Manage workspace defaults and personalize your review intelligence cockpit."
      />

      <Card className="animate-rise [animation-delay:40ms]">
        <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">Appearance</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Switch between light and dark themes.</p>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Theme Mode</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Current: {darkMode ? 'Dark' : 'Light'}</p>
          </div>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Toggle Theme
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Badge>Auto-tagging enabled</Badge>
          <Badge>Weekly summary email</Badge>
          <Badge>Alert SLA: 4h</Badge>
        </div>
      </Card>
    </section>
  )
}
