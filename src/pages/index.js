import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"
import ProjectCard from "../components/project-card"
import vhrLanding from "../images/vhr-landing.png"
import showroom from "../images/showroom.png"
import ratingsAndReviews from "../images/ratings-and-reviews.png"

const projectData = [
  {
    title: "Carfax VHR Landing Page",
    img: vhrLanding,
    description:
      "Carfax's landing page for Vehicle History Reports, the company's flagship product.",
    tools: "Pug, Sass, ES6, Webpack, and RESTful API consumption.",
    url: "https://www.carfax.com/vehicle-history-reports/",
    page: "/vhr-landing",
  },
  {
    title: "Carfax Showroom",
    img: showroom,
    description:
      "This site is the central location for Carfax's customers to run Vehicle History Reports and view reports they have run in the past.",
    tools:
      "React, Pug, Sass, ES6, Webpack, Enzyme/Jest, and RESTful API consumption.",
    url: "https://www.carfax.com/signin",
    page: "/showroom",
  },
  {
    title: "Carfax Ratings and Reviews",
    img: ratingsAndReviews,
    description:
      "Here Carfax users can view and edit any review they have provided for a car dealership or service shop for whom they have left a review.",
    tools: "React, Redux, Sass, ES6, Webpack, and RESTful API consumption.",
    url: "https://www.carfax.com/signin",
    page: "/ratings-and-reviews",
  },
]

const IndexPage = () => (
  <Layout detailsPage={false}>
    <SEO title="Home" />
    <div className={indexStyles.index}>
      <h2 className={indexStyles.title}>What I do</h2>
      <p>
        I'm a front-end web developer specializing in React and pixel perfect
        CSS. I have extensive experience working in an Agile environment using
        HTML5, CSS3/Sass, ES5/ES6, React, Redux, Git, and Webpack. Additionaly,
        I am familiar with Node.js and Express, AWS, and Jenkins.
      </p>
      <hr />
      <h2 className={indexStyles.workTitle}>Recent work</h2>
      <div className={indexStyles.indexWrapper}>
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            img={project.img}
            description={project.description}
            tools={project.tools}
            url={project.url}
            page={project.page}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
