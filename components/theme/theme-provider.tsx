import { ThemeProvider as BaseThemeProvider } from 'next-themes'
type ThemeProps = {
  children: React.ReactNode
}
const ThemeProvider = ({ children }: ThemeProps) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  )
}

export default ThemeProvider
