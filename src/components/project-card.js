import React from "react"
import { Link } from "gatsby"
import "./project-card.scss"

const ProjectCard = (props) => (
  <div className="card">
    <h2 className="cardTitle">{props.title}</h2>
    <picture>
      <source srcSet={props.img.default} type="image/webp" />
      <img className="cardImage" src={props.altImg} alt="Project" />
    </picture>
    {/* <p className="cardText">{props.description}</p> */}
    <p className="cardText">
      <strong>Tools: </strong>
      {props.tools}
    </p>
    <div className="buttonWrapper">
      <Link className="button" to={props.page}>
        Details
      </Link>
      {props.url !== null && (
        <a
          className="button"
          href={props.url}
          type="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
      )}
    </div>
  </div>
)

export default ProjectCard
