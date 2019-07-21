import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import layoutStyles from "./layout.module.css"
import SideNav from "./side-nav"
import "./layout.css"

const Layout = ({ children }) => {
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
      <div className={layoutStyles.layoutWrapper}>
        <SideNav siteTitle={data.site.siteMetadata.title} />
        <main className={layoutStyles.mainWrapper}>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
