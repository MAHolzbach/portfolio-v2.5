import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import indexStyles from "./index.module.scss"
import vhrLanding from "../images/vhr-landing.png"

const projectData = [
  {
    img: vhrLanding,
    description:
      "Carfax's landing page for Vehicle History Reports, the company's flagship product.",
    tools: "Pug, Sass, ES6, and Webpack.",
    url: "https://www.carfax.com/vehicle-history-reports/",
  },
  {
    img: vhrLanding,
    description:
      "A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice. A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice.",
    tools: "Pug, Sass, ES6, and Webpack.",
    url: "https://www.carfax.com/vehicle-history-reports/",
  },
  {
    img: vhrLanding,
    description:
      "A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice.",
    tools: "Pug, Sass, ES6, and Webpack.",
    url: "https://www.carfax.com/vehicle-history-reports/",
  },
  {
    img: vhrLanding,
    description:
      "A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice.",
    tools: "Pug, Sass, ES6, and Webpack.",
    url: "https://www.carfax.com/vehicle-history-reports/",
  },
  {
    img: vhrLanding,
    description:
      "A current project: Using React, ES6, and the NY Times API to render their top stories or a topic of your choice.",
    tools: "Pug, Sass, ES6, and Webpack.",
    url: "https://www.carfax.com/vehicle-history-reports/",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.index}>
      <h2 className={indexStyles.title}>What I do</h2>
      <p>
        I'm a front-end web developer specializing in React and pixel perfect
        CSS. I have extensive experience working in Agile environment using
        HTML5, CSS3/Sass, ES5/ES6, React, Redux, Git, and Webpack. Additionaly,
        I am familiar with Node.js and Express, AWS, and Jenkins.
      </p>
      <hr />
      <h2 className={indexStyles.workTitle}>Recent work</h2>
      <div className={indexStyles.indexWrapper}>
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            img={project.img}
            description={project.description}
            tools={project.tools}
            url={project.url}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
