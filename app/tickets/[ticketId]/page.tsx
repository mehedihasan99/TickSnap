import Placeholder from '@/components/Placeholder'
import { initialData } from '@/data/ticketData'

type TicketProps = {
  params: Promise<{ ticketId: string }>
}

export default async function Ticket({ params }: TicketProps) {
  const { ticketId } = await params
  const ticketDetails = initialData.find((ticket) => ticket.id === ticketId)
  if (!ticketDetails) return <Placeholder label="Ticket not found" />
  return (
    <>
      <div className="border-2 p-3 m-3 w-full">
        <h1>{ticketDetails?.title}</h1>
        <p>{ticketDetails?.content}</p>
      </div>
    </>
  )
}
