import Heading from '@/components/Heading'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { initialData } from '@/data/ticketData'
import { ticketPath } from '@/utils/paths'
import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react'
import Link from 'next/link'

const TicketStatus = {
  Open: <LucideFileText />,
  Done: <LucideCircleCheck />,
  InProgress: <LucidePencil />,
}
export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8 animate-fade-in-from-top">
      <Heading title="Ticket" description="All your ticket one place" />
      <div className="flex flex-col items-center  flex-1 gap-y-8">
        {initialData.map((ticket) => (
          <Card className="w-full max-w-[420px]" key={ticket.id}>
            <CardHeader>
              <CardTitle className="flex gap-x-2 items-center">
                <span>{TicketStatus[ticket?.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>

            <CardFooter>
              <Link className="text-sm underline" href={ticketPath(ticket.id)}>
                View Ticket
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
