import React from 'react'
import { Link } from "gatsby"

export default function Navbar({ siteTitle }) {
    return (
        <div className="container">
            <nav className="main-nav">
                <Link to="/" className="nav-brand">{siteTitle}</Link>
                <ul className="main-menu">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/portfolio">portfolio</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
        </div >
    )
}