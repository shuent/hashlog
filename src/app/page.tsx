import { HashTags } from '@/components/HashTags'
import { PostForm } from '@/components/PostForm'
import { PostList } from '@/components/PostList'
import { getHashtags, getPosts } from '@/db'
import { clsx } from 'clsx'

export default function Home() {
  const isCurrentUser = true
  return <main>{isCurrentUser ? <AppTop /> : <Landing />}</main>
}

const gradBg =
  'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-br'
const AppTop = async () => {
  const hashtags = await getHashtags()
  const posts = await getPosts()

  return (
    <div className="flex">
      <div
        className={clsx(
          'basis-16 py-8 px-4',
          'bg-slate-800',
          'text-white',
          'flex flex-col justify-between',
        )}
      >
        <HashTags hashtags={hashtags} />
        <Settings />
      </div>
      <div className="basis-auto max-w-3xl flex flex-col h-screen pt-8 pb-4 px-4">
        <div className="overflow-y-scroll">
          <PostList posts={posts} />
        </div>
        <div className="">
          <PostForm hashtags={hashtags} />
        </div>
      </div>
    </div>
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
