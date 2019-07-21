import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sideNavStyles from "./sidenav.module.scss"
import MeImage from "./me-image"
import { FaLinkedin, FaRegFilePdf, FaGithub, FaTwitter } from "react-icons/fa"

const SideNav = ({ siteTitle }) => (
  <div className={sideNavStyles.sideNavWrapper}>
    <h1 className={sideNavStyles.sideNavTitle}>
      <Link to="/" className={sideNavStyles.sideNavLink}>
        {siteTitle}
      </Link>
    </h1>
    <div className={sideNavStyles.imageWrapper}>
      <MeImage />
    </div>
    <h3 className={sideNavStyles.text}>
      A front-end developer with a focus on React and a passion for life abroad.
    </h3>
    <div className={sideNavStyles.socialLinks}>
      <a
        className={sideNavStyles.socialLink}
        href="https://www.dropbox.com/s/qg0d2av0ahilfim/Mike%20Holzbach%20Resume.pdf?dl=0"
        target="_blank"
      >
        <FaRegFilePdf />
      </a>
      <a
        className={sideNavStyles.socialLink}
        href="https://www.linkedin.com/in/michaelholzbach/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        className={sideNavStyles.socialLink}
        href="https://github.com/MAHolzbach"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        className={sideNavStyles.socialLink}
        href="https://twitter.com/MAHolzbach"
        target="_blank"
      >
        <FaTwitter />
      </a>
    </div>
  </div>
)

SideNav.propTypes = {
  siteTitle: PropTypes.string,
}

SideNav.defaultProps = {
  siteTitle: ``,
}

export default SideNav
