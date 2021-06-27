import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Post = ({ title, author, path, date, body, image }) => {
  const thumbnail = getImage(image)
  return (
    <Card>
      <GatsbyImage image={thumbnail} alt="thumbnail" />
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <Link to={path} className="btn btn-outline-priamry float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
