import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"
import ProjectCard from "../components/project-card"

const IndexPage = ({ data }) => {
  return (
    <Layout detailsPage={false}>
      <SEO title="Home" />
      <div className={indexStyles.index}>
        <h2 className={indexStyles.title}>What I Do</h2>
        <p>
          I'm a front-end web developer specializing in React and pixel perfect
          CSS. I have extensive experience working in an Agile environment using
          HTML5, CSS3/Sass, ES5/ES6, React, Redux, Vue, Git, and Webpack.
          Additionally, I am familiar with Netlify, Contentful, Gatsby, Node.js
          and Express, AWS, and Jenkins.
        </p>
        <hr />
        <h2 className={indexStyles.workTitle}>Professional Work</h2>
        <p>
          <strong>Note for European visitors:</strong> Due to the GDPR, I'm
          afraid that CARFAX is forced to block European IPs. I am happy to walk
          you through these projects via Skype!
        </p>
        <div className={indexStyles.indexWrapper}>
          {data.allIndexJson.edges.map(({ node }) => {
            return node.projectType === "professional" ? (
              <ProjectCard
                key={node.id}
                title={node.cardTitle}
                img={require("../images/" + node.cardImg)}
                altImg={require("../images/" + node.altCardImg)}
                description={node.cardDescription}
                tools={node.tools}
                url={node.cardUrl}
                page={node.cardPage}
              />
            ) : (
              ""
            )
          })}
        </div>
        <hr />
        <h2 className={indexStyles.workTitle}>Personal Projects</h2>
        <p>
          Here are a few of the personal projects I've recently tinkered with.
          Some are just demos, others are simply practice/learing opportunities,
          but all are still works in progress. Also, you can see the source code
          for this portfolio site, built in Gatsby, here:{" "}
          <a href="https://github.com/MAHolzbach/portfolio-v2" target="_blank">
            Portfolio Repo
          </a>
        </p>
        <div className={indexStyles.indexWrapper}>
          {data.allIndexJson.edges.map(({ node }) => {
            return node.projectType === "personal" ? (
              <ProjectCard
                key={node.id}
                title={node.cardTitle}
                img={require("../images/" + node.cardImg)}
                altImg={require("../images/" + node.altCardImg)}
                description={node.cardDescription}
                tools={node.tools}
                url={node.cardUrl}
                page={node.cardPage}
              />
            ) : (
              ""
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allIndexJson {
      edges {
        node {
          projectType
          cardDescription
          cardImg
          altCardImg
          cardPage
          cardTitle
          cardUrl
          tools
          id
        }
      }
    }
  }
`
