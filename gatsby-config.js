module.exports = {
  siteMetadata: {
    title: `Transformer`,
    description: `SITE META DESCRIPTION GOES HERE.`,
    siteUrl: `https://mikeriley.dev`,
    socialImage: `ABSOLUTE PATH TO IMAGE IN STATIC FOLDER`,
    author: `TWITTER HANDLE`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://54.187.0.234/graphql/',
        refetchInterval: 30,
        schema: {
          requestConcurrency: 10,
          timeout: 90000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
              maxFileSizeBytes: 100000000,
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'TypewriterCondensed-Bold',
            'TypewriterCondensed-DemiBold',
            'TypewriterCondensed-Regular',
          ],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ROOT SITE TITLE`,
        short_name: `SHORT VERSION OF ROOT SITE TITLE`,
        start_url: `/`,
        background_color: `HEX VALUE`,
        theme_color: `HEX VALUE`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: 'GTM-ID-STRING',
    //     includeInDevelopment: true
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
