import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilFunctions"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import styled from "@emotion/styled"
import Tag from "../components/Tag"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

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
        <MarkdownRenderer
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <TagList>
          {post.tags.map(tag => (
            <li key={tag}>
              <Tag to={`/tag/${slugify(tag)}`}>
                {"# "}
                {tag}
              </Tag>
            </li>
          ))}
        </TagList>
      </div>
      <h3 style={{ marginTop: "48px" }}>Share this post</h3>
      <div>
        <TagList>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wwww.facebook.com/sharer/sharer.php?u=${baseUrl}${pageContext.slug}`}
            >
              <FacebookIcon style={{ fontSize: "32px" }} color="primary" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/share?url=${baseUrl}${pageContext.slug}&text=${post.title}&viatitterHandle`}
            >
              <TwitterIcon style={{ fontSize: "32px" }} color="primary" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/shareArticle?url=${baseUrl}${pageContext.slug}`}
            >
              <LinkedInIcon style={{ fontSize: "32px" }} color="primary" />
            </a>
          </li>
        </TagList>
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

const TagList = styled.ul`
  display: flex;
  margin-bottom: 32px;
  li {
    margin-right: 12px;
  }
`

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*="language-"] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`

export default SinglePost
