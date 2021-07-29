import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"
import styled from "@emotion/styled"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle={"중원이 블로그"}>
      <div className="text-center">
        열심히 꿈틀대고 있는, 주니어 FE 개발자 중원이의 개발 블로그입니다{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </div>
      <H2Style>Recent Post</H2Style>
      <Seo title="Home" />
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <PostList>
              {data.allMarkdownRemark.nodes.map(
                ({ id, excerpt, fields, frontmatter }) => (
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
                )
              )}
            </PostList>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
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

export default IndexPage

const PostList = styled.div`
  max-width: 768px;
  margin: auto;
  margin-top: 30px;
`

const H2Style = styled.h2`
  margin-top: 60px;
`
