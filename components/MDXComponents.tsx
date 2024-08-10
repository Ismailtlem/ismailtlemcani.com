import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import CustomLink from './Link';
import Image from './Image';
import Pre from 'pliny/ui/Pre';
import TOCInline from 'pliny/ui/TOCInline';
import type { MDXComponents } from 'mdx/types';

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
};
