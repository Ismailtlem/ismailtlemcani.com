import type { Resume } from 'contentlayer/generated';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Resume, '_id' | '_raw' | 'body'>;
}

export default function ResumeLayout({ children }: Props) {
  return (
    <>
      <div className="resume">
        <div className="border border-t border-gray-200 dark:border-gray-700" />

        <main className="mx-auto my-12 max-w-screen-xl gap-12 space-y-12 rounded-md bg-gray-100 p-3 md:flex md:space-y-0 md:p-8">
          <div className="hidden border-l border-gray-300 md:block" />
          <div className="content prose prose-slate grow table-auto border-collapse space-y-5 text-justify leading-6 text-gray-900">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
