/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          color: "rgb(0, 191, 255)",
          // WebkitBackgroundClip: "text",
          // WebkitTextFillColor: "transparent",
          // backgroundClip: "text",
          // backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
        }}
      >
        {children}
      </h1>
    ),
  },
  head: ({ meta }) => (
    <>
      <title>Ismail Tlemcani - Developer</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  darkMode: true,
  dateFormatter: (date) => `Last updated at ${date.toDateString()}`,
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      {/* <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: "help" }}
      >
        CC BY-NC 4.0
      </abbr>{" "} */}
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
};
