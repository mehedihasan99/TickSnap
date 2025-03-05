'use client'

import Placeholder from '@/components/Placeholder'

export default function Error({ error }: { error: Error }) {
  return <Placeholder label={error.message || 'Something is wrong..'} />
}
