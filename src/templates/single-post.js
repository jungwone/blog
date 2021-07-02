import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilFunctions"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const thumbnail = getImage(post.image)
  const baseUrl = "https://jungwone.github.io/"

  const disqusConfig = {
    url: baseUrl + pageContext.slug,
    identifier: data.markdownRemark.id,
    title: post.title,
  }

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
      <h3>Share this post</h3>
      <div>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wwww.facebook.com/sharer/sharer.php?u=${baseUrl}${pageContext.slug}`}
            >
              facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/share?url=${baseUrl}${pageContext.slug}&text=${post.title}&viatitterHandle`}
            >
              twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://plus.google.com/share?url=${baseUrl}${pageContext.slug}`}
            >
              google
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/shareArticle?url=${baseUrl}${pageContext.slug}`}
            >
              linkedin
            </a>
          </li>
        </ul>
      </div>
      <div>
        <CommentCount config={disqusConfig} placehoolder={"..."} />
        <Disqus config={disqusConfig} />
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
