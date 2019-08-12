import React, { useState } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import detailsStyles from "./details.module.scss"
import { FaArrowLeft, FaChevronRight, FaChevronDown } from "react-icons/fa"
import ShowroomDesktopImage from "../components/showroom-desktop-img"
import ShowroomMobileImage from "../components/showroom-mobile-img"

const Details = ({ data }) => {
  const [infoTextOpen, setInfoTextOpen] = useState(true)
  const [desktopImageOpen, setDesktopImageOpen] = useState(false)
  const [mobileImageOpen, setMobileImageOpen] = useState(false)
  const {
    detailsTitle,
    detailsSubtitle,
    tools,
    detailsTask,
    detailsChallenges,
    detailsResults,
    detailsComments,
    detailsTeam,
  } = data.pagesJson

  return (
    <Layout detailsPage={true}>
      <div className={detailsStyles.container}>
        <Link className={detailsStyles.homeLink} to="/">
          <FaArrowLeft className={detailsStyles.icon} />
          Back
        </Link>
        <h1 className={detailsStyles.projectTitle}>{detailsTitle}</h1>
        <p className={detailsStyles.subtitle}>
          {detailsSubtitle}
          <a
            href="https://www.carfax.com/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carfax Signin
          </a>
        </p>
        <div className={detailsStyles.toggleWrapper}>
          <p
            className={detailsStyles.infoToggle}
            onClick={() => setInfoTextOpen(!infoTextOpen)}
          >
            {infoTextOpen ? (
              <FaChevronDown className={detailsStyles.icon} />
            ) : (
              <FaChevronRight className={detailsStyles.icon} />
            )}
            Project Details
          </p>
          <p
            className={detailsStyles.infoToggle}
            onClick={() => {
              setDesktopImageOpen(!desktopImageOpen)
              setMobileImageOpen(false)
            }}
          >
            {desktopImageOpen ? (
              <FaChevronDown className={detailsStyles.icon} />
            ) : (
              <FaChevronRight className={detailsStyles.icon} />
            )}
            Desktop View
          </p>
          <p
            className={detailsStyles.infoToggle}
            onClick={() => {
              setMobileImageOpen(!mobileImageOpen)
              setDesktopImageOpen(false)
            }}
          >
            {mobileImageOpen ? (
              <FaChevronDown className={detailsStyles.icon} />
            ) : (
              <FaChevronRight className={detailsStyles.icon} />
            )}
            Mobile View
          </p>
        </div>
        <div
          className={
            infoTextOpen
              ? detailsStyles.containerOpen
              : detailsStyles.containerClosed
          }
          id="infoTextWrapper"
        >
          <p className={detailsStyles.text}>
            <span className={detailsStyles.boldText}>Tools: </span>
            {tools}
          </p>
          <p className={detailsStyles.text}>
            <span className={detailsStyles.boldText}>Task: </span>
            {detailsTask}
          </p>
          <p className={detailsStyles.text}>
            <span className={detailsStyles.boldText}>Challenges: </span>
            {detailsChallenges}
          </p>
          <p className={detailsStyles.text}>
            <span className={detailsStyles.boldText}>Results: </span>
            {detailsResults}
          </p>
          <p className={detailsStyles.text}>
            <span className={detailsStyles.boldText}>Comments: </span>
            {detailsComments}
          </p>
          <p className={detailsStyles.text}>
            <span className={detailsStyles.boldText}>Team Members: </span>
            {detailsTeam}
          </p>
        </div>
        <>
          <div
            className={
              desktopImageOpen
                ? detailsStyles.containerOpen
                : detailsStyles.containerClosed
            }
          >
            {detailsTitle === "Showroom" && <ShowroomDesktopImage />}
          </div>
          <div
            className={
              mobileImageOpen
                ? detailsStyles.containerOpen
                : detailsStyles.containerClosed
            }
          >
            {" "}
            {detailsTitle === "Showroom" && <ShowroomMobileImage />}
          </div>
        </>
      </div>
    </Layout>
  )
}

export default Details

export const query = graphql`
  query($slug: String!) {
    pagesJson(fields: { slug: { eq: $slug } }) {
      detailsComments
      detailsResults
      detailsSubtitle
      detailsTask
      detailsChallenges
      detailsTeam
      detailsTitle
      tools
    }
  }
`
