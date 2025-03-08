import { PrismaClient, TicketStatus } from '@prisma/client'

const prisma = new PrismaClient()

export const tickets = [
  {
    title: 'Ticket 1',
    content: 'This is the first post content from database',
    status: TicketStatus.OPEN,
  },
  {
    title: 'Ticket 2',
    content: 'This is the second post content from database',
    status: TicketStatus.DONE,
  },
  {
    title: 'Ticket 3',
    content: 'This is the third post content from database',
    status: TicketStatus.IN_PROGRESS,
  },
  {
    title: 'Ticket 4',
    content: 'This is the fourth post content from database',
    status: TicketStatus.OPEN,
  },
]

async function interTicket() {
  await prisma.ticket.deleteMany()
  try {
    await prisma.ticket.createMany({
      data: tickets,
      skipDuplicates: true,
    })
    console.log('✅ Users inserted successfully!')
  } catch (error) {
    console.error('❌ Error inserting users:', error)
  } finally {
    await prisma.$disconnect()
  }
}

interTicket()
