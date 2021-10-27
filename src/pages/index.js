import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import  { header, btn } from "../styles/home.module.css"
import  {portfolio, projectstile, portfolio_content} from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
  const projects = data.projects.nodes;
  return (
    <Layout>
      <section className={header}>
        <div className={portfolio_content}>
        <h1>PORTFOLIO OF</h1>
        <h1>ROHIT RAMACHANDRAN</h1>
        <p>an interaction design student from IIT Guwahati.</p>
        <Link className={btn} to="/projects">View Projects</Link>
        </div>
      </section>
      <section>
      <div className={portfolio}>
        <h2>PROJECTS</h2>
        <p>A collection of my best work so far. Feel free to explore.</p>
        <div className={projectstile}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.featuredImg)} alt={project.frontmatter.slug} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </section>
    </Layout>
  )
}

//Projects Query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___priority}) {
    nodes {
      frontmatter {
        title
        subtitle
        role
        duration
        type
        slug
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
}
`