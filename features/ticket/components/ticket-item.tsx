import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ticketPath } from '@/paths'
import { Ticket } from '@prisma/client'
import clsx from 'clsx'
import { LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react'
import Link from 'next/link'
import { deleteTicket } from '../actions/delete-ticket'
import { TicketIcons } from '../constants'

type TicketProps = {
  ticket: Ticket
  isDetails?: boolean
}
export default function TicketItem({ ticket, isDetails }: TicketProps) {
  const detailsButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  )

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)} method="post">
      <Button size="icon" variant="outline">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  )
  return (
    <div
      className={clsx('flex gap-x-1 w-full', {
        'max-w-[450px]': isDetails,
        'max-w-[550px]': !isDetails,
      })}
    >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="flex gap-x-3 items-center">
            <span>{TicketIcons[ticket?.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': isDetails,
            })}
          >
            {ticket.content}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              veritatis at nobis adipisci, fugit provident, omnis, quidem
              nostrum sunt molestiae quisquam delectus voluptas! Modi itaque
              magnam consequuntur facilis saepe. Labore!
            </p>
          </span>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetails ? detailsButton : deleteButton}
      </div>
    </div>
  )
}
