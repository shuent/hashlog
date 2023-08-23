import { PostForm } from '@/components/PostForm'
import { PostList } from '@/components/PostList'

export default function Home() {
  const isCurrentUser = true
  return <main>{isCurrentUser ? <AppTop /> : <Landing />}</main>
}

const AppTop = () => {
  return (
    <>
      <div className="side">
        <HashTags />
        <Settings />
      </div>
      <div className="middle">
        <PostList />
        <PostForm />
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

const HashTags = () => {
  const hashtags = ['all', '#food', '#programming']
  return (
    <div className="hashs">
      {hashtags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
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
