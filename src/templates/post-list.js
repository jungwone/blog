import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import { graphql } from "gatsby"
import Pagination from "@material-ui/lab/Pagination"
import { navigate } from "gatsby"

const postList = props => {
  const posts = props.data.allMarkdownRemark.nodes
  const { currentPage, numberOfPages } = props.pageContext

  const onChangePage = (event, pageNum) => {
    navigate(`/page/${pageNum}`)
  }

  return (
    <Layout>
      <h1>{`Page ${currentPage}`}</h1>
      {posts.map(({ id, excerpt, fields, frontmatter }) => (
        <Post
          key={id}
          title={frontmatter.title}
          author={frontmatter.author}
          slug={fields.slug}
          date={frontmatter.date}
          body={excerpt}
          tags={frontmatter.tags}
          image={frontmatter.image}
          path={frontmatter.path}
        />
      ))}

      <Pagination
        page={currentPage}
        count={numberOfPages}
        onChange={onChangePage}
      />
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          author
          tags
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
      }
    }
  }
`

export default postList
