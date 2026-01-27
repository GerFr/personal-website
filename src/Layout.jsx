import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Layout() {
  const [dark, setDark] = useState(() => localStorage.theme === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <div className="min-h-screen bg-surface text-ink">
      <header className="flex items-center justify-between border-b border-ink/15 p-4">
        <nav className="flex gap-4">
          <Link to="/" className="text-ink/80 hover:text-ink hover:underline">Home</Link>
          <Link to="/projects" className="text-ink/80 hover:text-ink hover:underline">Projects</Link>
          <Link to="/about" className="text-ink/80 hover:text-ink hover:underline">About</Link>
          <Link to="/contact" className="text-ink/80 hover:text-ink hover:underline">Contact</Link>
        </nav>

        <button
          onClick={() => setDark((v) => !v)}
          className="rounded-md border border-ink/20 bg-brand/10 px-3 py-2 text-sm text-ink hover:bg-brand/20"
          aria-label="Toggle dark mode"
        >
          {!dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </header>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}
