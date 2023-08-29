import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

export const PostList = async ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post, index) => (
        <li key={index} className="flex gap-4 mb-4">
          <div className="time">{formatDateTime(post.created_at)}</div>
          <div>
            <div className="hashtag">{post.hashtag}</div>
            <div className="body">
              <ReactMarkdown
                remarkPlugins={[remarkBreaks, remarkGfm]}
                disallowedElements={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
                unwrapDisallowed={true}
              >
                {post.body}
              </ReactMarkdown>
            </div>
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
    return date.toLocaleString([], {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  } else {
    return date.toLocaleString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }
}
