/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ismail Tlemcani - Software Developer - France',
  author: 'Ismail Tlemcani',
  headerTitle: 'Home',
  description:
    'I help companies to provide value to their customers by using JavaScript and Python tools. I also love writing about what I am learning at the moment and working on exciting open source projects.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ismailtlemcani.com',
  siteRepo: 'https://github.com/Ismailtlem/ismailtlemcani.com',
  siteLogo: '/static/favicons/favicon.ico',
  socialBanner: '/static/favicons/favicon.ico',
  email: 'ismail@ismailtlemcani.com',
  github: 'https://github.com/Ismailtlem',
  twitter: 'https://twitter.com/Ismailtlem',
  linkedin: 'https://www.linkedin.com/in/ismailtlemcani',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
