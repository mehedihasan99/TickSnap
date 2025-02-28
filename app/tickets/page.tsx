import Heading from '@/components/Heading'

import { initialData } from '@/data/ticketData'
import TicketItem from '@/features/ticket/components/ticket-item'

export default function TicketsPage() {
  return (
    <div className="flex flex-1 w-full flex-col  gap-y-8">
      <Heading title="Ticket" description="All your ticket one place" />

      <div className="flex flex-col items-center justify-center w-full gap-y-8 animate-fade-in-from-top">
        {initialData.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} isDetails />
        ))}
      </div>
    </div>
  )
}
