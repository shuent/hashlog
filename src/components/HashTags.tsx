import { addHashtagAction } from '@/actions/hashtagActions'
import Link from 'next/link'

export const HashTags = ({ hashtags, currentTag }) => {
  return (
    <div className="hashtags flex flex-col gap-4">
      <ul className="glow">
        <li>
          <Link
            href="/logs"
            scroll={false}
            className="hover:underline underline-offset-4"
          >
            All
          </Link>
        </li>
        {hashtags.map((tag, index) => (
          <li key={index}>
            <Link
              href={{
                pathname: '/logs',
                query: { tag: tag },
              }}
              scroll={false}
              className="hover:underline underline-offset-4"
            >
              {tag}
            </Link>
          </li>
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
