import Placeholder from '@/components/Placeholder'
import { Button } from '@/components/ui/button'
import { initialData } from '@/data/ticketData'
import TicketItem from '@/features/ticket/components/ticket-item'

import { ticketsPath } from '@/utils/paths'
import Link from 'next/link'

type TicketProps = {
  params: Promise<{ ticketId: string }>
}

export default async function Ticket({ params }: TicketProps) {
  const { ticketId } = await params
  const ticketDetails = initialData.find((ticket) => ticket.id === ticketId)
  if (!ticketDetails)
    return (
      <>
        <Placeholder
          label="Ticket not found"
          button={
            <Button asChild variant={'secondary'}>
              <Link href={ticketsPath()}>Go back to Ticket</Link>
            </Button>
          }
        />
      </>
    )
  return (
    <div className="flex h-full justify-center w-full animate-fade-in-from-top">
      <TicketItem ticket={ticketDetails} />
    </div>
  )
}
