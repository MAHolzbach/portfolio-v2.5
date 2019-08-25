import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HackathonCreateTeamView = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/hackathon-create-team.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default HackathonCreateTeamView
