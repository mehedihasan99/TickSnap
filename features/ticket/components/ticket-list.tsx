import { getTickets } from '../queries/get-tickets'
import TicketItem from './ticket-item'

export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-8 animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} isDetails />
      ))}
    </div>
  )
}
