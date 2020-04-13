import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPage() {
  return (
    <div>
      <Layout>
        <SEO title="Works" />
        <h1>BlogPage</h1>
        <Link to="/">&#8592; Go back</Link>
      </Layout>
    </div>
  )
}
