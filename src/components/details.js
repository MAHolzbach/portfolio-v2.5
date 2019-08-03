import React from "react"
import { Link } from "gatsby"
import detailsStyles from "./details.module.scss"

const Details = props => {
  const { projectTitle, tools, task, purpose, challenges, results } = props.data
  return (
    <>
      <Link to="/">Home</Link>
      <h1>{projectTitle}</h1>
    </>
  )
}

export default Details
