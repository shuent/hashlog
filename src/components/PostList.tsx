import { getPosts } from '@/dummyData'

export const PostList = async () => {
  const posts = await getPosts()

  return (
    <ul className="posts">
      {posts.map((post, index) => (
        <li key={index}>
          <div className="time">{post.time}</div>
          <div className="hashtag">{post.hashtag}</div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </li>
      ))}
    </ul>
  )
}
