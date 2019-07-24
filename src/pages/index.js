import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import indexStyles from "./index.module.scss"
import nytReader from "../images/project-images/nyt-reader.png"

const projectData = [
  {
    img: nytReader,
    description:
      "A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice.",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.index}>
      <div className={indexStyles.indexWrapper}>
        <h1>Mike Holzbach</h1>
        <p>Under construction...</p>
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            img={project.img}
            description={project.description}
          />
        ))}
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
