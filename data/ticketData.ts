interface Post {
  id: string
  title: string
  content: string
  status: 'Open' | 'Done' | 'InProgress' // Restrict status to specific values
}

export const initialData: Post[] = [
  {
    id: '1',
    title: 'Ticket 1',
    content: 'This is the first post content',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Ticket 2',
    content: 'This is the second post content',
    status: 'Done',
  },
  {
    id: '3',
    title: 'Ticket 3',
    content: 'This is the third post content',
    status: 'InProgress',
  },
]
