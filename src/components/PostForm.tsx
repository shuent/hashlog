'use client'
import { addPostAction } from '@/actions/postActions'

export const PostForm = ({ hashtags }) => {
  const handleSubmit = (data: FormData) => {
    addPostAction(data)
  }

  return (
    <form action={handleSubmit} className="post">
      {/* <WyswygEditor /> */}
      <textarea name="rawText" />
      <select name="hashtag" id="hashtag">
        {hashtags.map((tag, i) => (
          <option key={i} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button type="submit">send</button>
    </form>
  )
}
