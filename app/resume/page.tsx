import { allResumes, Resume } from 'contentlayer/generated';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import ResumeLayout from '@/layouts/ResumeLayout';

export const metadata = genPageMetadata({ title: 'Resume' });

export default function Page() {
  const resume = allResumes.find((p) => p.slug === 'resume') as Resume;
  const mainContent = coreContent(resume);

  return (
    <>
      <ResumeLayout content={mainContent}>
        <MDXLayoutRenderer code={resume.body.code} />
      </ResumeLayout>
    </>
  );
}
