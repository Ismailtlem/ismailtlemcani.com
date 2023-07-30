/* eslint sort-keys: error */
/* eslint-disable import/no-anonymous-default-export */
export default {
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          color: "rgb(0, 191, 255)",
        }}
      >
        {children}
      </h1>
    ),
  },
  darkMode: true,
  dateFormatter: (date) => `Last updated at ${date.toDateString()}`,
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <time>{new Date().getFullYear()}</time> © Ismail Tlemcani.
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ meta }) => (
    <>
      <title>Ismail Tlemcani - Software developer</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  navs: [
    {
      name: "RSS",
      url: "/feed.xml",
    },
    {
      name: "Github",
      url: "https://github.com/Ismailtlem/",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ismailtlemcani/",
    },
  ],
  readMore: "Read More →",
};
