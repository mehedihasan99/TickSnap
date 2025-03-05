import TicketItem from '@/features/ticket/components/ticket-item'
import { getTicket } from '@/features/ticket/queries/get-ticket'

import { notFound } from 'next/navigation'

type TicketProps = {
  params: Promise<{ ticketId: string }>
}

export default async function Ticket({ params }: TicketProps) {
  const { ticketId } = await params
  const ticketDetails = await getTicket(ticketId)
  if (!ticketDetails) {
    notFound()
  }
  return (
    <div className="flex h-full justify-center w-full animate-fade-in-from-top">
      <TicketItem ticket={ticketDetails} />
    </div>
  )
}
