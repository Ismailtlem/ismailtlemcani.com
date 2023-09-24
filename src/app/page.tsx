export default function Home() {
  return (
    <div>
      <div className="space-y-7">
        <h1>Ismail Tlemcani</h1>
        <p>Hi There 👋</p>
        <p>
          I am Ismail Tlemcani, a Software Engineer, working with Web
          technologies
        </p>
        <p>
          {" "}
          I help companies to provide value to their customers by using
          JavaScript and Python tools. I also love writing about what I am
          learning at the moment and working on exciting open source projects.
        </p>
      </div>

      <div className="mt-16"></div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        <ul className="list-disc pl-4 my-6">
          <li>Email : ismail.tlemcani@gmail.com</li>
          <li className="mt-2">
            X.com (New Twitter){" "}
            <a href="https://x.com/Ismailtlem">@ismailtlem</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
