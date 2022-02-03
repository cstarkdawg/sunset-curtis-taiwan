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
        name: `locations`,
        path: `${__dirname}/src/locations/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Sunsets in Taiwan',
    description: 'Info on how and where to see sunsets in Taiwan',
    copyright: 'This website is copyright 2022 Sunsets in Taiwan',
    contact: 'cstarkey5@gmail.com',
  },
}

export const query = graphql`
    query LocationPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
        nodes {
        frontmatter {
            title
            city
            slug
            thumb {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
            }
        }
        id
        }
    }

    }`