import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function HeaderBar({ darkMode, onToggleDarkMode, onOpenSidebar, title }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:px-6 dark:border-slate-700 dark:bg-slate-950/90">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-sm font-semibold text-white">
            BG
          </div>
        </div>
      </div>
    </header>
  )
}
