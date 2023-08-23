'use server'
import { hashtags } from '@/dummyData'
import { revalidatePath } from 'next/cache'

export async function addHashtag(data: FormData) {
  const item = data.get('hashtag')?.toString()
  if (!item) return
  hashtags.push(item)
  revalidatePath('/')
}
