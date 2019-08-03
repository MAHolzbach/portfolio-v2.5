import React from "react"
import { Link } from "gatsby"
import detailsStyles from "./details.module.scss"

const Details = props => {
  const {
    projectTitle,
    subtitle,
    tools,
    task,
    purpose,
    challenges,
    results,
    comments,
    team,
  } = props.data
  return (
    <div className={detailsStyles.container}>
      <Link to="/">Home</Link>
      <h1 className={detailsStyles.projectTitle}>{projectTitle}</h1>
      <p className={detailsStyles.subtitle}>
        {subtitle}{" "}
        <a href="https://www.carfax.com/signin" target="_blank">
          Carfax Signin
        </a>
      </p>
      <p className={detailsStyles.tools}>
        <span className={detailsStyles.boldText}>Tools: </span>
        {tools}
      </p>
    </div>
  )
}

export default Details
