export let posts = [
  { time: '05:24', content: 'hoge hoge hoge log', hashtag: 'programing' },
  { time: '06:24', content: 'huga huga huga huga log', hashtag: 'food' },
]

export const getPosts = async () => {
  return Promise.resolve(posts)
}
