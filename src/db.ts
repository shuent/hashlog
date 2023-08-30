import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const supabase = () => createServerActionClient({ cookies }) // create instance every call

// Post
export const getPosts = async (tag) => {
  let query = supabase()
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
  if (tag) {
    query = query.eq('hashtag', tag)
  }
  const { data: posts, error } = await query
  return posts ?? []
}

export const addPost = async (post) => {
  console.log(post)
  const { error } = await supabase()
    .from('posts')
    .insert({ body: post.body, hashtag: post.hashtag })
  console.log(error)
}

// Hashtag
export const getHashtags = async () => {
  let { data: hashtags, error } = await supabase()
    .from('hashtags')
    .select('name')
  return hashtags?.map((v) => v.name) ?? []
}

export const addHashtag = async (tag) => {
  const { error } = await supabase().from('hashtags').insert({ name: tag })
}
