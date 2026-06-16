export function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 transition-all hover:shadow-md hover:shadow-slate-900/10 sm:p-5 dark:border-slate-700 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  )
}
