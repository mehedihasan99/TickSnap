import Heading from '@/components/Heading'
import Spinner from '@/components/Spinner'
import TicketList from '@/features/ticket/components/ticket-list'
import { Suspense } from 'react'

export default async function TicketsPage() {
  return (
    <div className="flex flex-1 w-full flex-col  gap-y-8">
      <Heading title="Ticket" description="All your ticket one place" />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  )
}
