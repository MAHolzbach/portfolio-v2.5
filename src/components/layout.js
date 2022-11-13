import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideNav from "./side-nav"
import "./layout.scss"
import "./layout.css"

const Layout = ({ detailsPage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="layoutWrapper">
        <SideNav
          siteTitle={data.site.siteMetadata.title}
          detailsPage={detailsPage}
        />
        <main className="mainWrapper">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
