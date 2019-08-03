import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import layoutStyles from "./layout.module.scss"
import SideNav from "./side-nav"
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
      <div className={layoutStyles.layoutWrapper}>
        <SideNav
          siteTitle={data.site.siteMetadata.title}
          detailsPage={detailsPage}
        />
        <main className={layoutStyles.mainWrapper}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
