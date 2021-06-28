import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilFunctions"
import styled from "@emotion/styled"

const Post = ({ title, author, path, date, body, image, tags }) => {
  const thumbnail = getImage(image)
  return (
    <PostWrapper>
      <GatsbyImage image={thumbnail} alt="thumbnail" />
      <PostBody>
        <PostTitle to={path}>{title}</PostTitle>
        <DateText>
          {date} by {author}
        </DateText>
        <CardText>{body}</CardText>
        <div style={{ display: "flex" }}>
          <TagList>
            {tags.map((tag, index) => (
              <li key={index}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Tag>#{tag}</Tag>
                </Link>
              </li>
            ))}
          </TagList>
          <ReadMore to={path}>Read more</ReadMore>
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
  font-size: 20px;
  font-weight: bold;
  color: #ff6363;

  &:hover {
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

const Tag = styled(Link)`
  padding: 3px 5px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  background-color: #ff6363;
  color: #fff;
  margin-right: 8px;
  font-size: 14px;

  &:hover {
    transform: translateY(10%);
    transition: all 0.2s;
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
  }
`
