import React from "react"
import { Link } from "gatsby"
import projectCardStyles from "./project-card.module.scss"

const ProjectCard = props => (
  <div className={projectCardStyles.card}>
    <img
      className={projectCardStyles.cardImage}
      src={props.img}
      alt="Project"
    />
    <p className={projectCardStyles.cardText}>{props.description}</p>
    <p className={projectCardStyles.cardText}>
      <strong>Tools: </strong>
      {props.tools}
    </p>
    <a
      className={projectCardStyles.button}
      href={props.url}
      type="button"
      target="_blank"
    >
      Visit
    </a>
  </div>
)

export default ProjectCard
