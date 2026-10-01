/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';

import { slug } from 'github-slugger';
import Image from '@/components/Image';
import Link from '@/components/Link';
import Tag from '@/components/Tag';

import { CoreContent } from 'pliny/utils/contentlayer';
import { formatDate } from 'pliny/utils/formatDate';
import { usePathname } from 'next/navigation';
import siteMetadata from '@/data/siteMetadata';
import tagData from 'app/tag-data.json';
import type { Blog } from 'contentlayer/generated';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog>[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            ← Previous
          </Link>
        )}
        <span className="text-gray-500 dark:text-gray-400">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Next →
          </Link>
        )}
      </nav>
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  const isBlogIndex = pathname.startsWith('/blog');
  const activeTag = pathname.startsWith('/tags/')
    ? decodeURI(pathname.split('/tags/')[1])
    : null;

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:gap-12 lg:gap-20">
          <aside className="hidden min-w-[220px] max-w-[220px] border-r border-gray-200/80 pr-8 dark:border-gray-800 sm:block">
            <nav className="sticky top-24 py-8" aria-label="Browse posts by tag">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-px w-7 bg-amber-700/60 dark:bg-amber-300/50"
                  aria-hidden="true"
                />
                <h2 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
              </div>
              <ul className="space-y-0.5">
                <li>
                  <Link
                    href="/blog"
                    aria-current={isBlogIndex ? 'page' : undefined}
                    className={`group flex items-center justify-between py-2 text-sm transition-colors ${
                      isBlogIndex
                        ? 'text-gray-950 dark:text-white'
                        : 'text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`h-1 w-1 rotate-45 transition-colors ${
                          isBlogIndex
                            ? 'bg-amber-700 dark:bg-amber-300'
                            : 'bg-transparent group-hover:bg-amber-700/60 dark:group-hover:bg-amber-300/60'
                        }`}
                        aria-hidden="true"
                      />
                      All articles
                    </span>
                  </Link>
                </li>
                {sortedTags.map((tag) => {
                  const isActive = activeTag === slug(tag);

                  return (
                    <li key={tag}>
                      <Link
                        href={`/tags/${slug(tag)}`}
                        aria-label={`View posts tagged ${tag}`}
                        aria-current={isActive ? 'page' : undefined}
                        className={`group flex items-center justify-between py-2 text-sm transition-colors ${
                          isActive
                            ? 'text-gray-950 dark:text-white'
                            : 'text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white'
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-2.5">
                          <span
                            className={`h-1 w-1 flex-none rotate-45 transition-colors ${
                              isActive
                                ? 'bg-amber-700 dark:bg-amber-300'
                                : 'bg-transparent group-hover:bg-amber-700/60 dark:group-hover:bg-amber-300/60'
                            }`}
                            aria-hidden="true"
                          />
                          <span className="truncate">{tag}</span>
                        </span>
                        <span className="ml-3 text-[11px] tabular-nums text-gray-400 dark:text-gray-600">
                          {tagCounts[tag]}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
          <div className="flex-1">
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, images, readingTime } = post;
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                          {readingTime?.text && (
                            <>
                              <span className="mx-2" aria-hidden="true">
                                ·
                              </span>
                              <span>{readingTime.text}</span>
                            </>
                          )}
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-4">
                          {images && images[0] && (
                            <div className="flex-shrink-0">
                              <Image
                                alt={title}
                                src={images[0]}
                                className="h-20 w-20 rounded-lg object-cover"
                                width={80}
                                height={80}
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                            </div>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
