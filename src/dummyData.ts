export let posts = [
  { time: '05:24', content: 'hoge hoge hoge log', hashtag: 'programing' },
  { time: '06:24', content: 'huga huga huga huga log', hashtag: 'food' },
]

export let hashtags = ['programming', 'food']

export const getPosts = async () => {
  return Promise.resolve(posts)
}

export const getHashtags = async () => {
  return Promise.resolve(hashtags)
}
