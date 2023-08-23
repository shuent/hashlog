'use client'
import { useEffect, useState } from 'react'
import { addPost } from '@/actions/postActions'
// import WyswygEditor from '@/components/WyswygEditor'

import dynamic from 'next/dynamic'
const WyswygEditor = dynamic(() => import('../components/WyswygEditor'), {
  ssr: false,
})
export const PostForm = () => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true) // wait window.document defined
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <form action={addPost} className="post">
      <WyswygEditor />
      <select name="hashtag" id="hashtag">
        <option value="programming">programming</option>
        <option value="food">food</option>
      </select>
      <button type="submit">send</button>
    </form>
  )
}
