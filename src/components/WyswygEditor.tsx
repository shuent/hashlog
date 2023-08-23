// export const WyswygEditor = () => {}
'use client'
import React, { useEffect, useRef } from 'react'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
// @ts-ignore
import QuillMarkdown from 'quilljs-markdown'
import MagicUrl from 'quill-magic-url'
import 'quilljs-markdown/dist/quilljs-markdown-common-style.css' // Import recommended CSS
// import dynamic from 'next/dynamic'
Quill.register('modules/magicUrl', MagicUrl)

const QuillMarkdownEditor = () => {
  const hiddenRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const options = {
      theme: 'snow',

      modules: {
        magicUrl: true,
        toolbar: false,
      },
    }

    // Quill.register('modules/magicUrl', MagicUrl)
    // Create Quill instance2
    const editor = new Quill('#editor', options)

    // Markdown options
    const markdownOptions = {
      // ... your markdown options here
      ignoreTags: ['header', 'bold', 'italics', 'blockquote', 'strikethrough'],
    }

    // Enable markdown
    const quillMarkdown = new QuillMarkdown(editor, markdownOptions)

    editor.on('text-change', () => {
      const content = editor.root.innerHTML
      hiddenRef.current?.setAttribute('value', content)
    })

    // Clean up when component unmounts
    return () => {
      quillMarkdown.destroy()
      //   editor.destroy()
    }
  }, [])

  return (
    <div>
      <div id="editor" />
      <input type="hidden" ref={hiddenRef} name="rawText" value={''} />
    </div>
  )
}

export default QuillMarkdownEditor
