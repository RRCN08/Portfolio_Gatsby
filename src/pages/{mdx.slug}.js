import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectDetails({ data }) {
  const { title, subtitle, field, duration, featuredImg} = data.mdx.frontmatter
  return (
      <Layout>

        <div className="banner" style={{ display: "grid" }}>
          <GatsbyImage style={{ gridArea: "1/1", }} image={getImage(featuredImg)} />
            <div style={{ gridArea: "1/1", position: "relative", }} >
              <section className="hero is-fullheight">
                <div className="hero-body">
                  <div class="container">
                    <h1 className="title is-1">{title}</h1>
                    <p className="content">{subtitle}</p>
                    <h6 className="title is-5">Duration: {duration}</h6>
                    <h6 className="title is-5">Field: {field}</h6>
                  </div>
                  
                </div>
              </section>
            </div>
        </div>
        
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div> 
            </div>        
          </div>
        </section>

      </Layout>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
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
      body
    }
  }
`