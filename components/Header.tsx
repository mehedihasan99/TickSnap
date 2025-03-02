import { homePath, ticketsPath } from '@/utils/paths'
import { LucideKanban } from 'lucide-react'
import Link from 'next/link'
import ThemeSwitcher from './theme/theme-switcher'
import { buttonVariants } from './ui/button'

export default function Header() {
  return (
    <nav className="flex justify-between fixed top-0 bg-white dark:bg-slate-900 left-0 right-0 z-20  px-5 py-2.5 border-b  ">
      <div>
        <Link
          className={buttonVariants({
            variant: 'ghost',
          })}
          href={homePath()}
        >
          <LucideKanban />
          <h1 className="text-lg  font-semibold">TickSnap </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        <Link
          className={buttonVariants({
            variant: 'default',
          })}
          href={ticketsPath()}
        >
          Tickets
        </Link>
      </div>
    </nav>
  )
}
