import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TagsPage = () => (
  <Layout>
    <Seo title="tags" />
    <h1>Tags</h1>
  </Layout>
)

export default TagsPage
