import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown'

export const convertHtmlToMD = (htmlText: string) => {
  const nhm = new NodeHtmlMarkdown({ bulletMarker: '-', useInlineLinks: false })
  return nhm.translate(htmlText)
}
