'use server'

import { revalidatePath } from 'next/cache'
import { addPost } from '@/db'
import { convertHtmlToMD } from '@/utils'

export async function addPostAction(data: FormData) {
  const hashtag = data.get('hashtag')?.toString() ?? ''
  const rawText = data.get('rawText')?.toString() ?? ''
  const newPost = {
    hashtag,
    body: rawText,
  }
  console.log(newPost)
  await addPost(newPost)
  revalidatePath('/')
}
