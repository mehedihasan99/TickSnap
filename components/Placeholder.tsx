import { LucideShieldAlert } from 'lucide-react'

interface PlaceholderProps {
  label: string
  icon?: React.ReactElement
}
export default function Placeholder({
  label,
  icon = <LucideShieldAlert />,
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-3">
      <span>{icon}</span>
      <h2>{label}</h2>
    </div>
  )
}
