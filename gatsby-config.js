module.exports = {
  siteMetadata: {
    title: 'AOM Cloud Enterprise',
    siteUrl: 'https://aomcloudenterprise.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // Note: Change `siteMetadata.siteUrl` to your domain in this file.
    'gatsby-plugin-sitemap',
  ],
}
