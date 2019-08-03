import { Link } from "gatsby"
import React from "react"
import sideNavStyles from "./sidenav.module.scss"
import MeImage from "./me-image"
import { FaLinkedin, FaRegFilePdf, FaGithub, FaTwitter } from "react-icons/fa"

const SideNav = ({ detailsPage, siteTitle }) => (
  <div
    className={
      detailsPage
        ? sideNavStyles.pageSideNavWrapper
        : sideNavStyles.sideNavWrapper
    }
  >
    <h1
      className={
        detailsPage
          ? sideNavStyles.pageSideNavTitle
          : sideNavStyles.sideNavTitle
      }
    >
      <Link to="/" className={sideNavStyles.sideNavLink}>
        {siteTitle}
      </Link>
    </h1>
    <div className={sideNavStyles.imageTextWrapper}>
      <div className={sideNavStyles.imageWrapper}>
        <MeImage />
      </div>
      <h3 className={sideNavStyles.text}>
        A front-end developer with a focus on React and a passion for life
        abroad.
      </h3>
    </div>
    <div className={sideNavStyles.socialLinks}>
      <a
        className={sideNavStyles.socialLink}
        href="https://www.dropbox.com/s/qg0d2av0ahilfim/Mike%20Holzbach%20Resume.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegFilePdf />
      </a>
      <a
        className={sideNavStyles.socialLink}
        href="https://www.linkedin.com/in/michaelholzbach/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className={sideNavStyles.socialLink}
        href="https://github.com/MAHolzbach"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className={sideNavStyles.socialLink}
        href="https://twitter.com/MAHolzbach"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  </div>
)

export default SideNav
