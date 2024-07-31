import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            I'm Ismail Tlemcani
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            a Software Developer, working with Web technologies{' '}
          </p>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Don't hesitate to react out to me on any of my social media accounts that you'll find
            down below or on my email{' '}
            <strong>
              <u>ismail@ismailtlemcani.com</u>
            </strong>
          </p>
        </div>
      </div>
    </>
  )
}
