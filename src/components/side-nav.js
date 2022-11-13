import { Link } from "gatsby"
import React from "react"
import "./sidenav.scss"
import MeImage from "./me-image"
import { FaLinkedin, FaRegFilePdf, FaGithub, FaTwitter } from "react-icons/fa"

const SideNav = ({ detailsPage, siteTitle }) => (
  <div
    className={
      detailsPage
        ? "pageSideNavWrapper"
        : "sideNavWrapper"
    }
  >
    <h1
      className={
        detailsPage
          ? "pageSideNavTitle"
          : "sideNavTitle"
      }
    >
      <Link to="/" className="sideNavLink">
        {siteTitle}
      </Link>
    </h1>
    <div
      className={
        detailsPage
          ? "pageImageTextWrapper"
          : "imageTextWrapper"
      }
    >
      <div className="imageWrapper">
        <MeImage />
      </div>
      <h3 className="text">
        A front-end developer with a focus on React and a passion for life
        abroad.
      </h3>
    </div>
    <div className="socialLinks">
      <a
        className="socialLink"
        href="https://www.dropbox.com/s/tglsuyx7z5zvy04/Mike%20Holzbach%20Resume.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegFilePdf />
      </a>
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/michaelholzbach/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="socialLink"
        href="https://github.com/MAHolzbach"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  </div>
)

export default SideNav
