import { useState } from 'react'
import { HeaderBar } from '../components/HeaderBar'
import { KpiGrid } from '../components/KpiGrid'
import { PlatformBreakdown } from '../components/PlatformBreakdown'
import { RecentReviewsFeed } from '../components/RecentReviewsFeed'
import { SentimentTrendCard } from '../components/SentimentTrendCard'
import { Sidebar } from '../components/Sidebar'
import { UrgentActionQueue } from '../components/UrgentActionQueue'
import { AlertsView, InsightsView, ReviewsView, SettingsView } from './SectionViews'
import {
  kpiCards,
  navigationItems,
  platformStats,
  recentReviews,
  sentimentTrend,
  urgentQueue,
} from '../data/dashboardData'

export function DashboardPage({ darkMode, onToggleDarkMode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [activePage, setActivePage] = useState('dashboard')
  const activeTitle = navigationItems.find((item) => item.key === activePage)?.name ?? 'Dashboard'

  const renderPage = () => {
    switch (activePage) {
      case 'reviews':
        return <ReviewsView recentReviews={recentReviews} />
      case 'insights':
        return <InsightsView sentimentTrend={sentimentTrend} platformStats={platformStats} />
      case 'alerts':
        return <AlertsView urgentQueue={urgentQueue} />
      case 'settings':
        return <SettingsView darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      case 'dashboard':
      default:
        return (
          <>
            <KpiGrid cards={kpiCards} />

            <section className="grid gap-6 xl:grid-cols-3">
              <div className="space-y-6 xl:col-span-2">
                <SentimentTrendCard points={sentimentTrend} />
                <UrgentActionQueue items={urgentQueue} />
              </div>

              <div className="space-y-6">
                <PlatformBreakdown platforms={platformStats} />
                <RecentReviewsFeed reviews={recentReviews} />
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-slate-100/80 transition-colors dark:bg-slate-950">
      <Sidebar
        items={navigationItems}
        activeKey={activePage}
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        onSelect={setActivePage}
      />

      <div className="md:ml-60 lg:ml-64">
        <HeaderBar
          darkMode={darkMode}
          onToggleDarkMode={onToggleDarkMode}
          onOpenSidebar={() => setMobileSidebarOpen(true)}
          title={activeTitle}
        />

        <main className="space-y-6 p-4 md:p-5 lg:p-6">{renderPage()}</main>
      </div>
    </div>
  )
}
