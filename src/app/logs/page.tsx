import { HashTags } from '@/components/HashTags'
import { PostForm } from '@/components/PostForm'
import { PostList } from '@/components/PostList'
import { getHashtags, getPosts } from '@/db'
import { clsx } from 'clsx'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const AppTop = async ({ searchParams }) => {
  // auth
  const isCurrentUser = true
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/')
  }
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // data
  let currentTag: string | undefined = searchParams.tag

  const hashtags = await getHashtags()

  if (currentTag && !hashtags.includes(currentTag)) currentTag = undefined

  const posts = await getPosts(currentTag)
  console.log(posts)

  const headerTagName = currentTag || 'All'

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
        <HashTags hashtags={hashtags} currentTag={currentTag} />
        <p>{user?.email}</p>
        <Settings />
      </div>
      <div className="w-full max-w-screen-md flex flex-col h-screen p-4">
        <div className="self-center mb-2 text-slate-500 font-semibold">
          {headerTagName}
        </div>
        <div className="h-full overflow-y-auto">
          <PostList posts={posts} hasCurrentTag={!!currentTag} />
        </div>
        <div className="">
          <PostForm hashtags={hashtags} currentTag={currentTag} />
        </div>
      </div>
    </div>
  )
}

const Settings = () => {
  return (
    <div className="setting">
      <Link href="/auth/logout" prefetch={false} className="hover:underline">
        Log out
      </Link>
    </div>
  )
}

export default AppTop
