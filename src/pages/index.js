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
        <h2 className={indexStyles.title}>What I do</h2>
        <p>
          I'm a front-end web developer specializing in React and pixel perfect
          CSS. I have extensive experience working in an Agile environment using
          HTML5, CSS3/Sass, ES5/ES6, React, Redux, Git, and Webpack.
          Additionally, I am familiar with Node.js and Express, AWS, and
          Jenkins.
        </p>
        <hr />
        <h2 className={indexStyles.workTitle}>Current and Previous work</h2>
        <p>
          <strong>Note for European visitors:</strong> Due to the GDPR, I'm
          afraid that CARFAX is forced to block European IPs. I am happy to walk
          you through these projects via Skype!
        </p>
        <div className={indexStyles.indexWrapper}>
          {data.allIndexJson.edges.map(({ node }) => (
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
          ))}
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
