'use client'
import { addPostAction } from '@/actions/postActions'
import { useRef } from 'react'

type Props = { hashtags: []; currentTag: any; notifyMutate: () => void }
export const PostForm = ({ hashtags, currentTag, notifyMutate }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (data: FormData) => {
    await addPostAction(data)
    notifyMutate()
    formRef.current?.reset()
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-1 border border-slate-300 rounded-md p-1 mt-1"
      ref={formRef}
    >
      <textarea name="rawText" rows={1} className="max-h-64 p-2" />
      <hr />
      <div className="basis-auto flex justify-between">
        <select
          name="hashtag"
          id="hashtag"
          className=""
          defaultValue={currentTag}
        >
          {hashtags.map((tag, i) => (
            <option key={i} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="text-white bg-slate-600 hover:bg-slate-700 py-1 px-2 rounded-md"
        >
          send
        </button>
      </div>
    </form>
  )
}
