'use client'

import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'
import { PostList } from './PostList'
import { PostForm } from './PostForm'

const PAGE_SIZE = 20
const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const PostContainer = ({ currentTag, hashtags }: any) => {
  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // 最後に到達した
    const url =
      `/api/posts?page=${pageIndex}` + (currentTag ? `&tag=${currentTag}` : '')
    return url // SWR キー
  }

  const { data, isValidating, mutate, size, setSize } = useSWRInfinite(
    getKey,
    fetcher,
  )

  const handleFetchMore = () => {
    setSize(size + 1)
  }

  const hasNoMore = data && data[data.length - 1].length < PAGE_SIZE

  const LoadMore = () => (
    <div className="w-full flex flex-col items-center">
      <button
        onClick={handleFetchMore}
        disabled={isValidating}
        className="px-2 border text-blue-500 rounded-full mx-auto disabled:opacity-20"
      >
        load more
      </button>
    </div>
  )
  const headerTagName = currentTag || 'All'
  const posts = data?.flat() ?? []
  const showPosts = posts.length !== 0
  return (
    <div className="h-screen p-4 flex flex-col ">
      <div className="flex-none self-center mb-2 text-slate-500 font-semibold">
        {headerTagName}
      </div>
      {showPosts ? (
        <div className="h-full min-h-0 flex flex-col">
          <div className="overflow-auto flex flex-col-reverse">
            <PostList posts={posts} showTag={!currentTag} />
            {!hasNoMore && <LoadMore />}
          </div>
        </div>
      ) : (
        <div className="h-full">no posts yet (T﹏T)</div>
      )}
      <div className="flex-none">
        <PostForm
          hashtags={hashtags}
          currentTag={currentTag}
          notifyMutate={mutate}
        />
      </div>
    </div>
  )
}
