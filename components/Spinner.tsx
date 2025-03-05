import { LucideLoader } from 'lucide-react'

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <LucideLoader className="h-14 w-14 animate-spin" />
    </div>
  )
}
