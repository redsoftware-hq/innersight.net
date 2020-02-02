module.exports = {
  siteMetadata: {
    title: `InnerSight Interiors`,
    description: `Where thoughts take shape.`,
    author: `@redsoftwarein`,
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
        name: `InnerSight Interiors`,
        short_name: `InnerSight`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
