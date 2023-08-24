'use server'

import { addHashtag } from '@/db'
import { revalidatePath } from 'next/cache'

export async function addHashtagAction(data: FormData) {
  const item = data.get('hashtag')?.toString()
  if (!item) return
  await addHashtag(item)
  revalidatePath('/')
}
