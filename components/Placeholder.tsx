import { LucideShieldAlert } from 'lucide-react'
import { cloneElement } from 'react'

interface PlaceholderProps {
  label: string
  icon?: React.ReactElement
  button?: React.ReactElement
}
export default function Placeholder({
  label,
  icon = <LucideShieldAlert />,
  button = <div />,
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-3">
      {cloneElement(icon, { className: 'h-12 w-12 text-gray-500' })}
      <h2>{label}</h2>
      {cloneElement(button, {
        className: 'h-10',
      })}
    </div>
  )
}
