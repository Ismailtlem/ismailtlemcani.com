import { ReactNode } from 'react';
import Link from '../components/Link';
interface Props {
  children: ReactNode;
}

export default function AmaLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col items-center h-screen text-center mt-56">
        <h1 className="text-3xl font-bold mb-4">Do you have a question ? Let's talk</h1>
        <div className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          <Link
            key={'talk'}
            href={'https://calendly.com/ismail-tlemcani/ask-me-anything'}
            className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
          >
            {children}
          </Link>
        </div>
      </div>
    </>
  );
}
