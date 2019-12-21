import React, { useState } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import detailsStyles from "./details.module.scss"
import { FaArrowLeft, FaChevronRight, FaChevronDown } from "react-icons/fa"
import ShowroomDesktopImage from "../components/showroom-desktop-img"
import ShowroomMobileImage from "../components/showroom-mobile-img"
import VhrLandingDesktopImage from "../components/vhr-landing-desktop-img"
import VhrLandingMobileImage from "../components/vhr-landing-mobile-img"
import PurchaseDesktopImage from "../components/purchase-desktop-img"
import PurchaseMobileImage from "../components/purchase-mobile-img"
import RatingsDesktopImage from "../components/ratings-desktop-img"
import RatingsMobileImage from "../components/ratings-mobile-img"
import RecordCheckDesktopImage from "../components/record-check-desktop-img"
import RecordCheckMobileImage from "../components/record-check-mobile-img"
import HackathonCreateTeamView from "../components/hackathon-create-team-view"
import HackathonIdeasView from "../components/hackathon-ideas-view"
import NICBDesktopImage from "../components/nicb-desktop-img"
import NICBMobileImage from "../components/nicb-mobile-img"
import HackerNewsStories from "../components/hacker-news-stories-img"
import HackerNewsComments from "../components/hacker-news-comments-img"

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
    visitUrl,
  } = data.pagesJson

  const handleToggleClick = e => {
    const isMobile = window.innerWidth <= 426

    switch (e.target.id) {
      case "textToggle":
        setInfoTextOpen(!infoTextOpen)
        if (isMobile) {
          setDesktopImageOpen(false)
          setMobileImageOpen(false)
        }
        break
      case "desktopImageToggle":
        setDesktopImageOpen(!desktopImageOpen)
        setMobileImageOpen(false)
        if (isMobile) {
          setInfoTextOpen(false)
        }
        break
      case "mobileImageToggle":
        setMobileImageOpen(!mobileImageOpen)
        setDesktopImageOpen(false)
        if (isMobile) {
          setInfoTextOpen(false)
        }
        break
      default:
        break
    }
  }

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
          {visitUrl !== null && (
            <a href={`${visitUrl}`} target="_blank" rel="noopener noreferrer">
              View Site
            </a>
          )}
        </p>
        <div className={detailsStyles.toggleWrapper}>
          <button
            id="textToggle"
            className={detailsStyles.infoToggle}
            onClick={e => handleToggleClick(e)}
          >
            {infoTextOpen ? (
              <FaChevronDown className={detailsStyles.icon} />
            ) : (
              <FaChevronRight className={detailsStyles.icon} />
            )}
            Project Details
          </button>
          <button
            id="desktopImageToggle"
            className={detailsStyles.infoToggle}
            onClick={e => handleToggleClick(e)}
          >
            {desktopImageOpen ? (
              <FaChevronDown className={detailsStyles.icon} />
            ) : (
              <FaChevronRight className={detailsStyles.icon} />
            )}
            {detailsTitle === "Carfax Hackathon App"
              ? "Create Team"
              : detailsTitle === "Hacker News Clone"
              ? "Stories View"
              : " Desktop View"}
          </button>
          <button
            id="mobileImageToggle"
            className={detailsStyles.infoToggle}
            onClick={e => handleToggleClick(e)}
          >
            {mobileImageOpen ? (
              <FaChevronDown className={detailsStyles.icon} />
            ) : (
              <FaChevronRight className={detailsStyles.icon} />
            )}
            {detailsTitle === "Carfax Hackathon App"
              ? "Idea Submission"
              : detailsTitle === "Hacker News Clone"
              ? "Comments View"
              : " Mobile View"}
          </button>
        </div>
        <hr />
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
            {detailsTitle === "Vehicle History Report Landing Page" && (
              <VhrLandingDesktopImage />
            )}
            {detailsTitle === "Carfax Purchase Page" && (
              <PurchaseDesktopImage />
            )}
            {detailsTitle === "Carfax Ratings and Reviews" && (
              <RatingsDesktopImage />
            )}
            {detailsTitle === "Carfax Record Check" && (
              <RecordCheckDesktopImage />
            )}
            {detailsTitle === "Carfax Hackathon App" && (
              <HackathonCreateTeamView />
            )}
            {detailsTitle === "National Insurance Crime Bureau Form" && (
              <NICBDesktopImage />
            )}
            {detailsTitle === "Hacker News Clone" && <HackerNewsStories />}
          </div>
          <div
            className={
              detailsTitle === "Carfax Hackathon App" ||
              detailsTitle === "Hacker News Clone"
                ? `${
                    mobileImageOpen
                      ? detailsStyles.containerOpen
                      : detailsStyles.containerClosed
                  }`
                : `${detailsStyles.mobileImageWrapper}
              ${
                mobileImageOpen
                  ? detailsStyles.containerOpen
                  : detailsStyles.containerClosed
              }`
            }
          >
            {detailsTitle === "Showroom" && <ShowroomMobileImage />}
            {detailsTitle === "Vehicle History Report Landing Page" && (
              <VhrLandingMobileImage />
            )}
            {detailsTitle === "Carfax Purchase Page" && <PurchaseMobileImage />}
            {detailsTitle === "Carfax Ratings and Reviews" && (
              <RatingsMobileImage />
            )}
            {detailsTitle === "Carfax Record Check" && (
              <RecordCheckMobileImage />
            )}
            {detailsTitle === "Carfax Hackathon App" && <HackathonIdeasView />}
            {detailsTitle === "National Insurance Crime Bureau Form" && (
              <NICBMobileImage />
            )}
            {detailsTitle === "Hacker News Clone" && <HackerNewsComments />}
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
      visitUrl
    }
  }
`
