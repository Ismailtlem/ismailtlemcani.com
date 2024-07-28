import type { Resume } from 'contentlayer/generated'
import { Toc } from 'pliny/mdx-plugins/remark-toc-headings'
import { ReactNode } from 'react'

import siteMetadata from '@/data/siteMetadata'

interface Props {
  children: ReactNode
  toc: Toc
  content: Omit<Resume, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content, toc }: Props) {
  const { title, headerTitle } = siteMetadata

  const description = 'My professional career, experiences, and skills.'

  return (
    <>
      <div className="resume">
        <header className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            {description}
          </p>
        </header>

        <div className="border border-t border-gray-200 dark:border-gray-700" />

        <main className="mx-auto my-12 max-w-screen-xl gap-12 space-y-12 rounded-md bg-gray-100 p-3 md:flex md:space-y-0 md:p-8">
          <div className="hidden border-l border-gray-300 md:block" />
          <div className="content prose prose-slate grow table-auto border-collapse space-y-5 text-justify leading-6 text-gray-900">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
