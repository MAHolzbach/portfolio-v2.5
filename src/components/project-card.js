import React from "react"
import { Link } from "gatsby"
import projectCardStyles from "./project-card.module.scss"

const ProjectCard = props => (
  <div className={projectCardStyles.card}>
    <h2 className={projectCardStyles.cardTitle}>{props.title}</h2>
    <picture>
      <source srcSet={props.img} type="image/webp" />
      <img
        className={projectCardStyles.cardImage}
        src={props.altImg}
        alt="Project"
      />
    </picture>
    {/* <p className={projectCardStyles.cardText}>{props.description}</p> */}
    <p className={projectCardStyles.cardText}>
      <strong>Tools: </strong>
      {props.tools}
    </p>
    <div className={projectCardStyles.buttonWrapper}>
      <Link className={projectCardStyles.button} to={props.page}>
        Details
      </Link>
      {props.url !== null && (
        <a
          className={projectCardStyles.button}
          href={props.url}
          type="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
      )}{" "}
    </div>
  </div>
)

export default ProjectCard
