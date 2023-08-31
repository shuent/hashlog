import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const supabase = () => createServerActionClient({ cookies }) // create instance every call

// Post
type Post = {
  body: string
  hashtag: string
}
export const getPosts = async (tag: string | null, page: number) => {
  const limit = 20
  const start = page * limit
  const end = start + limit - 1
  let query = supabase()
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .range(start, end)
  if (tag) {
    query = query.eq('hashtag', tag)
  }
  const { data: posts, error } = await query
  error && console.error(error)

  return posts ?? []
}

export const addPost = async (post: Post) => {
  const { error } = await supabase()
    .from('posts')
    .insert({ body: post.body, hashtag: post.hashtag })
  error && console.error(error)
}

// Hashtag
export const getHashtags = async () => {
  let { data: hashtags, error } = await supabase()
    .from('hashtags')
    .select('name')
  error && console.error(error)

  return hashtags?.map((v) => v.name) ?? []
}

export const addHashtag = async (tag: string) => {
  const { error } = await supabase().from('hashtags').insert({ name: tag })
  error && console.error(error)
}

export const deleteHashtag = async (tag: string) => {
  const { error } = await supabase().from('hashtags').delete().eq('name', tag)
  error && console.error(error)
}
