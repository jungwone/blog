import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"
import styled from "@emotion/styled"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home Page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <PostList>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt.body}
                tags={node.frontmatter.tags}
                image={node.frontmatter.image}
              />
            ))}
          </PostList>
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
            date(formatString: "YYYY-MM-DD")
            author
            path
            tags
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

const PostList = styled.div`
  max-width: 768px;
  margin: auto;
`
