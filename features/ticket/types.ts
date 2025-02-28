export type TicketStatus = 'Open' | 'Done' | 'InProgress'

export interface Ticket {
  id: string
  title: string
  content: string
  status: TicketStatus
}
