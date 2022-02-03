import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from "../../styles/locations.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Locations({ data }) {
    const locations = data.locations.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Sunsets in Taiwan</h2>
                <h3>The Info You Need for Chasing Sunsets in Taiwan</h3>
                <div className={styles.locations}>
                    {locations.map(location => (
                        <Link to={"/locations/" + location.frontmatter.slug} key={location.id}>
                            <div>
                                <GatsbyImage image={getImage(location.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                                <h3>{location.frontmatter.title}</h3>
                                <p>{location.frontmatter.city}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at {contact}</p>
            </div>
        </Layout>

    )
}
// export page query

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
    contact: site {
        siteMetadata {
        contact
        }
    }
    }`