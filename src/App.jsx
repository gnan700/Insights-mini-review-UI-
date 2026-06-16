import { useEffect, useState } from 'react'
import { DashboardPage } from './pages/DashboardPage'

function resolveInitialMode() {
  const saved = localStorage.getItem('filesure-theme')
  if (saved) {
    return saved === 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [darkMode, setDarkMode] = useState(resolveInitialMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('filesure-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return <DashboardPage darkMode={darkMode} onToggleDarkMode={() => setDarkMode((mode) => !mode)} />
}

export default App
