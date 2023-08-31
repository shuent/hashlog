'use server'

import { addHashtag, deleteHashtag } from '@/db'
import { revalidatePath } from 'next/cache'

export async function addHashtagAction(data: FormData) {
  const item = data.get('hashtag')?.toString()
  if (!item) return
  await addHashtag(item)
  revalidatePath('/logs')
}

export async function deleteHashtagAction(data: FormData) {
  const item = data.get('hashtag')?.toString()
  if (!item) return
  await deleteHashtag(item)
  revalidatePath('/logs')
}
