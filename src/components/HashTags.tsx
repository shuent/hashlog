import { addHashtag } from '@/actions/hashtagActions'

export const HashTags = ({ hashtags }) => {
  return (
    <div className="hashtags">
      <ul>
        <li>All</li>
        {hashtags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <form action={addHashtag}>
        <input type="text" name="hashtag" placeholder="add tag" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}
