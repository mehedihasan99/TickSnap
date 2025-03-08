import Header from '@/components/Header'
import ThemeProvider from '@/components/theme/theme-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TickSnap',
  description: 'A Next.js starter with batteries included.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   dark:bg-slate-900`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex flex-1 w-full px-8 py-24 min-h-screen overflow-y-auto overflow-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
