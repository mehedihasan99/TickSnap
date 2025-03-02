'use client'
import { LucideMoon, LucideSun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <LucideMoon className="h-4 w-4 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <LucideSun className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ThemeSwitcher
