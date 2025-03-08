import Heading from '@/components/Heading'
import { ticketsPath } from '@/paths'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-y-8 ">
      <Heading title="Home" description="Welcome to the home page" />
      <div>
        <Link className="underline" href={ticketsPath()}>
          Go to Ticket
        </Link>
      </div>
    </div>
  )
}
