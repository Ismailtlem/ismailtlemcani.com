import ResumeLayout from '@/layouts/ResumeLayout'
import { genPageMetadata } from 'app/seo'
import { allResumes } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent, MDXDocument } from 'pliny/utils/contentlayer'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Page() {
  const resume: MDXDocument = allResumes.find((p) => p.slug === 'resume')
  const mainContent = coreContent(resume)

  return (
    <>
      <ResumeLayout content={mainContent}>
        <MDXLayoutRenderer code={resume.body.code} />
      </ResumeLayout>
    </>
  )
}
