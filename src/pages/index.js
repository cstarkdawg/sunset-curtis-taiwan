import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Sunset Chasing Taiwan</h2>
          <h3>Info for Catching Sunsets in Taiwan</h3>
          <p>Photographer in Taipei</p>
          <Link className={styles.btn}to="/locations">Sunset Locations</Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt="Banner" />
      </section>
    </Layout>
  )
}


export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`