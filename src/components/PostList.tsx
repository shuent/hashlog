import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

export const PostList = async ({ posts, hasCurrentTag }) => {
  if (posts.length === 0) return <div>no posts yet (T﹏T)</div>
  return (
    <ul className="posts overflow-auto flex flex-col-reverse">
      {posts.map((post, index) => (
        <li key={index} className="flex items-baseline gap-4 mb-4">
          <div className="w-16 flex-none flex flex-col items-end">
            <div className="text-xs time whitespace-pre-wrap">
              {formatDateTime(post.created_at)}
            </div>
          </div>
          <div>
            <div className="body">
              <ReactMarkdown
                remarkPlugins={[remarkBreaks, remarkGfm]}
                disallowedElements={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
                unwrapDisallowed={true}
                skipHtml={true}
                className="markdown"
              >
                {post.body}
              </ReactMarkdown>
            </div>
            {!hasCurrentTag && (
              <div className="inline-block hashtag text-sm text-slate-400 border border-slate-200 rounded-md px-1 py-0.25">
                {post.hashtag}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

function formatDateTime(dateString) {
  const now = new Date()
  const date = new Date(dateString)

  const isToday = date.toDateString() === now.toDateString()
  const isThisYear = date.getFullYear() === now.getFullYear()

  if (isToday) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } else if (isThisYear) {
    return date
      .toLocaleString([], {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .replace(' ', '\n')
  } else {
    return date.toLocaleString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }
}
