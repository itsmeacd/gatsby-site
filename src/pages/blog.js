import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function BlogPage({ data }) {
  return (
    <div className="blog-page">
      <Layout>
        <SEO title="Works" />
        <h1>Latest Posts</h1>
        <ul>
          {data.allMarkdownRemark.edges.map(post => (
            <li key={post.node.id}>
              <Link to={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
              </Link>
              <small>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </small>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
