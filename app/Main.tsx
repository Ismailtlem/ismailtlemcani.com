import Terminal from '@/components/Terminal';

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-primary-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-gray-500 dark:text-gray-400 font-mono text-lg">&gt;</span> I'm
            Ismail Tlemcani
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <span className="text-primary-500 font-mono">{'//'}</span> a Software Developer, working
            with Web technologies. I'm living in Paris at the moment.
          </p>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I help companies to provide value to their customers by using{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary-600 dark:text-primary-400">
              JavaScript
            </code>{' '}
            and{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary-600 dark:text-primary-400">
              Python
            </code>{' '}
            tools. I also love writing about what I am learning at the moment and working on
            exciting open source projects.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Don't hesitate to reach out to me on any of my social media accounts that you'll find
            down below or on my email{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-primary-600 dark:text-primary-400">
              ismail.tlemcani@gmail.com
            </code>
          </p>
        </div>

        <div className="pt-8">
          <Terminal />
        </div>
      </div>
    </>
  );
}
