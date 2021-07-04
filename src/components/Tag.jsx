import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Tag = props => {
  return <TagStyle to={props.to}>{props.children}</TagStyle>
}

export default Tag

const TagStyle = styled(Link)`
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
    color: #fff;
  }
`
