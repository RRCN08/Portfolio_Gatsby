/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Portfolio | Rohit Ramachandran',
    description: 'Portfolio of Rohit Ramachandran, final year design student at IIT Guwahati.',
    keywords: 'rohit,ramachandran,design,portfolio,iitg,iit,bdes,guwahati',
    author: 'Rohit Ramachandran'
  }
}