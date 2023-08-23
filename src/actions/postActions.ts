'use server'
import { posts } from '@/dummyData'
import { revalidatePath } from 'next/cache'

export async function addPost(data: FormData) {
  const time = new Date().toLocaleString()
  const hashtag = data.get('hashtag')?.toString() ?? ''
  const content = data.get('rawText')?.toString() ?? ''
  const newPost = {
    time,
    hashtag,
    content,
  }
  posts.push(newPost)
  revalidatePath('/')
}
