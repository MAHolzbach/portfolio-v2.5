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
    <p className={projectCardStyles.cardTitle}>{props.description}</p>
    <p>{typeof props.img}</p>
  </div>
)

export default ProjectCard
