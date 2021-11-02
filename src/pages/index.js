import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  return (
    <Layout>

      <div className="circles" style={{ display: "grid" }}>
        <GatsbyImage style={{ gridArea: "1/1", }} image={getImage(data.file)} />
        <div style={{ gridArea: "1/1", position: "relative", }} >
        <section className="hero is-fullheight">
            <div className="hero-body">
            <div class="container">
              <h1 className="title is-1 is-uppercase">Portfolio of <br/> Rohit Ramachandran</h1>
              <p className="content">an interaction design student from IIT Guwahati.</p>
              <div className="buttons">
                <Link className="button is-primary is-outlined" to="/">view projects</Link>
                <Link className="button is-primary is-outlined" to="/">view resume</Link>
              </div>
            </div>    
          </div>
        </section>
        </div>
      </div>

      
      
      <section className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title is-1 is-uppercase">Projects</h2>
              <p className="content">A collection of my best work so far. Feel free to explore.</p>
              <div className="projectstile">
                {data.allMdx.nodes.map((node) => (
                  <Link to={node.slug} key={node.id}>
                    <div>
                      <GatsbyImage image={getImage(node.frontmatter.featuredImg)} alt={node.slug} />
                      <h3>{node.frontmatter.title}</h3>
                      <p>{node.frontmatter.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
      </section>

    </Layout>
  );
};

//Projects Query
export const query = graphql`
query {

  allMdx(sort: {fields: frontmatter___priority}) {
    nodes {
      frontmatter {
        title
        subtitle
        featuredImg {
          childImageSharp {
            gatsbyImageData (
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      slug
      id
    }
  }

  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData (
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }

}
`

export default IndexPage