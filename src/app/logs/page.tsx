import { HashTags } from './components/HashTags'
import { getHashtags, getPosts } from '@/db'
import { clsx } from 'clsx'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { PostContainer } from './components/PostContainer'

export const dynamic = 'force-dynamic'

const AppTop = async ({ searchParams }: any) => {
  // auth
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
  const userName = user?.user_metadata.name
  // data
  let currentTag: string | undefined = searchParams.tag

  const hashtags = await getHashtags()

  if (currentTag && !hashtags.includes(currentTag)) currentTag = undefined

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

        <div className="setting">
          <p className="text-sm mb-2">{userName}</p>
          <Link
            href="/auth/logout"
            prefetch={false}
            className="hover:underline"
          >
            Log out
          </Link>
        </div>
      </div>
      <div className="w-full max-w-screen-lg">
        <PostContainer currentTag={currentTag} hashtags={hashtags} />
      </div>
    </div>
  )
}

export default AppTop
