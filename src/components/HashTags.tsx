import { addHashtagAction } from '@/actions/hashtagActions'

export const HashTags = ({ hashtags }) => {
  return (
    <div className="hashtags flex flex-col gap-4">
      <ul className="glow">
        <li>All</li>
        {hashtags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <form action={addHashtagAction} className="flex gap-2">
        <input
          type="text"
          name="hashtag"
          placeholder="new tag"
          className="w-32 pl-1 -ml-1 rounded-md text-black"
        />
        <button
          type="submit"
          className="rounded-md border px-1 bg-white text-black hover:bg-slate-100"
        >
          add
        </button>
      </form>
    </div>
  )
}
