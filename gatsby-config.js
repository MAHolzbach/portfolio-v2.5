module.exports = {
  siteMetadata: {
    title: `Mike Holzbach`,
    description: `The portfolio site of Mike Holzbach.`,
    author: `Mike Holzbach`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mike-holzbach-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/code-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
