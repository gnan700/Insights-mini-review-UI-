import {
  BellAlertIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  HomeIcon,
  InboxStackIcon,
  LightBulbIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { SidebarItem } from './SidebarItem'

const iconMap = {
  dashboard: HomeIcon,
  reviews: InboxStackIcon,
  insights: LightBulbIcon,
  alerts: BellAlertIcon,
  settings: Cog6ToothIcon,
}

export function Sidebar({ items, activeKey, mobileOpen, onClose, onSelect }) {
  return (
    <>
      <aside className="hidden h-screen w-64 shrink-0 border-r border-slate-200 bg-white/95 p-4 backdrop-blur md:fixed md:left-0 md:top-0 md:block md:w-60 lg:w-64 dark:border-slate-700 dark:bg-slate-900/95">
        <div className="flex items-center gap-2 px-2 py-3">
          <ChartBarSquareIcon className="h-7 w-7 text-emerald-500" />
          <span className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            InsightAI
          </span>
        </div>

        <nav className="mt-6 space-y-2">
          {items.map((item) => (
            <SidebarItem
              key={item.key}
              icon={iconMap[item.key]}
              label={item.name}
              active={item.key === activeKey}
              onClick={() => onSelect(item.key)}
            />
          ))}
        </nav>
      </aside>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 transition-opacity md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-slate-200 bg-white p-4 shadow-xl transition-transform duration-300 md:hidden dark:border-slate-700 dark:bg-slate-900 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-2 py-3">
            <ChartBarSquareIcon className="h-7 w-7 text-emerald-500" />
            <span className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              InsightAI
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 space-y-2">
          {items.map((item) => (
            <SidebarItem
              key={item.key}
              icon={iconMap[item.key]}
              label={item.name}
              active={item.key === activeKey}
              onClick={() => {
                onSelect(item.key)
                onClose()
              }}
            />
          ))}
        </nav>
      </aside>
    </>
  )
}
