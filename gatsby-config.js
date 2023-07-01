module.exports = {
  siteMetadata: {
    title: `Transformer`,
    description: `Transformer is a high-end visual effects boutique that is based in Santa Monica, CA.`,
    siteUrl: `http://transformer.tv/`,
    socialImage: `/social-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://admin.transformer.tv/graphql/',
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
        name: `Transformer`,
        short_name: `Transformer`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#d3cfbf`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-accessibilityjs`,
    //   options: {
    //     injectStyles: false,
    //     errorClassName: false,
    //   },
    // },
  ],
};
