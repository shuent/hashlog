import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL
const apiKey = process.env.SUPABASE_ANONKEY

// Create a single supabase client for interacting with your database
const supabase = createClient(url, apiKey, { auth: { persistSession: false } })

// Post
export const getPosts = async () => {
  let { data: posts, error } = await supabase.from('posts').select('*')
  return posts ?? []
}

export const addPost = async (post) => {
  console.log(post)
  const { error } = await supabase
    .from('posts')
    .insert({ body: post.body, hashtag: post.hashtag })
  console.log(error)
}

// Hashtag
export const getHashtags = async () => {
  let { data: hashtags, error } = await supabase.from('hashtags').select('name')
  return hashtags?.map((v) => v.name) ?? []
}

export const addHashtag = async (tag) => {
  const { error } = await supabase.from('hashtags').insert({ name: tag })
}
