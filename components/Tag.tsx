import { slug } from 'github-slugger';
import Link from 'next/link';
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 mb-2 text-sm font-medium uppercase text-primary-600 hover:text-primary-700 dark:hover:text-primary-400 font-mono bg-primary-500/10 px-3 py-1 rounded hover:bg-primary-500/20 transition-all duration-300 border border-primary-500/20 hover:border-primary-500/50 hover:neon-glow hover:scale-105 inline-block"
    >
      {text.split(' ').join('_').toLowerCase()}
    </Link>
  );
};

export default Tag;
