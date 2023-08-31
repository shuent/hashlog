'use server'

import { revalidatePath } from 'next/cache'
import { addPost } from '@/db'

export async function addPostAction(data: FormData) {
  const hashtag = data.get('hashtag')?.toString() ?? null
  const rawText = data.get('rawText')?.toString() ?? null

  if (!(hashtag && rawText)) return

  const newPost = {
    hashtag,
    body: rawText,
  }
  await addPost(newPost)
}
