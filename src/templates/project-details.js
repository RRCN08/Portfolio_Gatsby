import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import  { html, featured, details } from "../styles/project-details.module.css"
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, subtitle, duration, featuredImg} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={details}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <h6>{duration}</h6>
                <div className={featured}>
                {<GatsbyImage image={getImage(data.markdownRemark.frontmatter.featuredImg)} alt={data.markdownRemark.frontmatter.slug} />}
                </div>
                {<div className={html} dangerouslySetInnerHTML={ { __html: html}} />}
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        subtitle
        duration
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`