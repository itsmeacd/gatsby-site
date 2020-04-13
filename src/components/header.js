import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="brand">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <nav>
          <Link to="/">about us</Link>
          <Link to="/works">works</Link>
          <Link to="/contact">contact</Link>
          <Link to="/blog">blog</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
