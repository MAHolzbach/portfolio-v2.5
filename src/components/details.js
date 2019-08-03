import React, { useState } from "react"
import { Link } from "gatsby"
import detailsStyles from "./details.module.scss"
import { FaArrowLeft, FaChevronRight, FaChevronDown } from "react-icons/fa"

const Details = props => {
  const [infoTextOpen, setInfoTextOpen] = useState(false)
  const {
    projectTitle,
    subtitle,
    tools,
    task,
    challenges,
    results,
    comments,
    team,
  } = props.data

  return (
    <div className={detailsStyles.container}>
      <Link className={detailsStyles.homeLink} to="/">
        <FaArrowLeft className={detailsStyles.icon} />
        Back
      </Link>
      <h1 className={detailsStyles.projectTitle}>{projectTitle}</h1>
      <p className={detailsStyles.subtitle}>
        {subtitle}
        <a href="https://www.carfax.com/signin" target="_blank">
          Carfax Signin
        </a>
      </p>
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
      <div
        className={
          infoTextOpen
            ? detailsStyles.infoTextOpen
            : detailsStyles.infoTextClosed
        }
        id="infoTextWrapper"
      >
        <p className={detailsStyles.text}>
          <span className={detailsStyles.boldText}>Tools: </span>
          {tools}
        </p>
        <p className={detailsStyles.text}>
          <span className={detailsStyles.boldText}>Task: </span>
          {task}
        </p>
        <p className={detailsStyles.text}>
          <span className={detailsStyles.boldText}>Challenges: </span>
          {challenges}
        </p>
        <p className={detailsStyles.text}>
          <span className={detailsStyles.boldText}>Results: </span>
          {results}
        </p>
        <p className={detailsStyles.text}>
          <span className={detailsStyles.boldText}>Comments: </span>
          {comments}
        </p>
        <p className={detailsStyles.text}>
          <span className={detailsStyles.boldText}>Adventuring Party: </span>
          {team}
        </p>
      </div>
    </div>
  )
}

export default Details
