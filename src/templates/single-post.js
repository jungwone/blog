import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilFunctions"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const thumbnail = getImage(post.image)
  return (
    <Layout>
      <Seo title={post.title} />
      <h1>{post.title}</h1>
      <div>
        <GatsbyImage image={thumbnail} alt="thumbnail" />
        <span>{post.date}</span> by <span>{post.author}</span>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <ul>
          {post.tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "YYYY-MM-DD")
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
    }
  }
`

export default SinglePost
