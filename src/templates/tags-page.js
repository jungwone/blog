import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugify } from "../utils/utilFunctions"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <Seo title="All tags" keywords={["tags", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Link to={`/tag/${slugify(tag)}`}>
              {tag} <span>{tagPostCounts[tag]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
