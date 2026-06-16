const variants = {
  primary:
    'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300',
  secondary:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
}

export function Button({ variant = 'primary', children }) {
  return (
    <button
      type="button"
      className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
