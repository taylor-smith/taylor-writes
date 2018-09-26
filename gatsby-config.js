module.exports = {
  siteMetadata: {
    title: 'Taylor Smith',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Taylor Smith',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon  : 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/md`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
}
