import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilFunctions"
import styled from "@emotion/styled"
import Tag from "./Tag"

const Post = ({ title, author, slug, date, body, image, tags }) => {
  const thumbnail = getImage(image)
  return (
    <PostWrapper>
      <GatsbyImage image={thumbnail} alt="thumbnail" />
      <PostBody>
        <PostTitle to={`/${slug}`}>{title}</PostTitle>
        <DateText>
          {date} by {author}
        </DateText>
        <div>{body}</div>
        <div style={{ display: "flex" }}>
          <TagList>
            {tags.map((tag, index) => (
              <li key={index}>
                <Tag to={`/tag/${slugify(tag)}`}>#{tag}</Tag>
              </li>
            ))}
          </TagList>
          <ReadMore to={`${slug}`}>Read more</ReadMore>
        </div>
      </PostBody>
    </PostWrapper>
  )
}

export default Post

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.25em;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
`

const PostBody = styled.div`
  padding: 1rem;
`

const PostTitle = styled(Link)`
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #ff6363;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;

  text &:hover {
    text-decoration: underline;
  }
`

const DateText = styled.div`
  font-size: 14px;
  opacity: 0.8;
  margin-top: 6px;
`

const TagList = styled.ul`
  display: inline-flex;

  li {
    display: flex;
    align-items: center;
  }
`

const ReadMore = styled(Link)`
  border: 1px solid #ff6363;
  border-radius: 4px;
  color: #ff6363;
  padding: 6px;
  margin-left: auto;
  &:hover {
    transition: 0.2s;
    transform: translateY(-20%);
    color: #ff6363;
  }
`
