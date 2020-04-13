import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <div className="blog-post">
      <Layout>
        <Link to="/blog">Go Back</Link>
        <div className="inner-blog-post">
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </h4>
          <p
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
