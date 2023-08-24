import { HashTags } from '@/components/HashTags'
import { PostForm } from '@/components/PostForm'
import { PostList } from '@/components/PostList'
import { getHashtags, getPosts } from '@/db'

export default function Home() {
  const isCurrentUser = true
  return <main>{isCurrentUser ? <AppTop /> : <Landing />}</main>
}

const AppTop = async () => {
  const hashtags = await getHashtags()
  const posts = await getPosts()

  return (
    <>
      <div className="side">
        <HashTags hashtags={hashtags} />
        <Settings />
      </div>
      <div className="middle">
        <PostList posts={posts} />
        <PostForm hashtags={hashtags} />
      </div>
    </>
  )
}

const Settings = () => {
  return (
    <div className="setting">
      <div className="logout">Log out</div>
    </div>
  )
}

const Landing = () => {
  return (
    <>
      <div>
        <h1>Lets Start app</h1>
        <p>log and tag for writing note.</p>
      </div>
      <div className="login">
        <button>login with google</button>
      </div>
    </>
  )
}
