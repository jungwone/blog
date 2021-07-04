import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugify } from "../utils/utilFunctions"
import Tag from "../components/Tag"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle={"태그 모음"}>
      <Seo title="All tags" keywords={["tags", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Tag to={`/tag/${slugify(tag)}`}>
              {"#"}
              {tag}{" "}
              <span style={{ marginLeft: "3px" }}>{tagPostCounts[tag]}</span>
            </Tag>
          </li>
        ))}
      </ul>
      {tags.length === 0 && <div>아직 등록된 태그가 없습니다 :)</div>}
    </Layout>
  )
}

export default tagsPage
