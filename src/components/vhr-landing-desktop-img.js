import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const VhrLandingDesktopImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/vhr-desktop.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default VhrLandingDesktopImage
