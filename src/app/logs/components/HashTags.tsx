import { addHashtagAction, deleteHashtagAction } from '@/actions/hashtagActions'
import Link from 'next/link'

type Props = { hashtags: string[] }
export const HashTags = ({ hashtags }: Props) => {
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
          <li key={index} className="group flex justify-between">
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
            <form
              action={deleteHashtagAction}
              className="hidden group-hover:inline mx-2 "
            >
              <button
                className="px-2 text-red-500"
                type="submit"
                name="hashtag"
                value={tag}
              >
                <DeleteIcon />
              </button>
            </form>
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

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
    <path
      fillRule="evenodd"
      d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
)
