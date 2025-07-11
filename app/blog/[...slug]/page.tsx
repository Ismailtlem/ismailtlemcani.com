import 'css/prism.css';
import 'katex/dist/katex.css';

import { components } from '@/components/MDXComponents';
import PageTitle from '@/components/PageTitle';
import siteMetadata from '@/data/siteMetadata';
import PostBanner from '@/layouts/PostBanner';
import PostLayout from '@/layouts/PostLayout';
import PostSimple from '@/layouts/PostSimple';
import { genPageMetadata } from 'app/seo';
import type { Authors, Blog } from 'contentlayer/generated';
import { allAuthors, allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer';

const defaultLayout = 'PostLayout';
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'));
  const post = allBlogs.find((p) => p.slug === slug);
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();
  const authors = authorDetails.map((author) => author.name);
  let imageList = [siteMetadata.socialBanner];
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images;
  }
  const canonicalUrl = post.canonicalUrl || `${siteMetadata.siteUrl}/${post.path}`;
  return genPageMetadata({
    title: post.title,
    description: post.summary,
    image: imageList[0],
    canonicalUrl,
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    author: authors.length > 0 ? authors[0] : siteMetadata.author,
  });
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }));

  return paths;
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'));
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs));
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    );
  }

  const prev = sortedCoreContents[postIndex + 1];
  const next = sortedCoreContents[postIndex - 1];
  const post = allBlogs.find((p) => p.slug === slug) as Blog;
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  const mainContent = coreContent(post);
  const jsonLd = post.structuredData;
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    };
  });

  const Layout = layouts[post.layout || defaultLayout];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  );
}
