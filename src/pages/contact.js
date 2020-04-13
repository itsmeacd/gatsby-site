import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function ContactPage() {
  return (
    <div>
      <Layout>
        <SEO title="Contact" />
        <h1>ContactPage</h1>
        <Link to="/">&#8592; Go back</Link>
      </Layout>
    </div>
  )
}
