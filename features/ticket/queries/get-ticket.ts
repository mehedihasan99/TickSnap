import { initialData } from '@/data/ticketData'
import { Ticket } from '../types'

export async function getTicket(ticketId: string): Promise<Ticket | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // throw new Error('Not implemented')
  const maybeTicket = initialData.find((ticket) => ticket.id === ticketId)
  return new Promise((resolve) => {
    resolve(maybeTicket || null)
  })
}
