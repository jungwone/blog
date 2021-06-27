import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home Page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt.body}
                image={node.frontmatter.image}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const indexQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 768
                  height: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
