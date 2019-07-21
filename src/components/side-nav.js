import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sideNavStyles from "./sidenav.module.css"

const SideNav = ({ siteTitle }) => (
  <div className={sideNavStyles.sideNavWrapper}>
    <h1 className={sideNavStyles.sideNavTitle}>
      <Link to="/" className={sideNavStyles.sideNavLink}>
        {siteTitle}
      </Link>
    </h1>
  </div>
)

SideNav.propTypes = {
  siteTitle: PropTypes.string,
}

SideNav.defaultProps = {
  siteTitle: ``,
}

export default SideNav
