import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.index}>
      <div className={indexStyles.indexWrapper}>
        <h1>Mike Holzbach</h1>
        <p>Under construction...</p>
        <div className={indexStyles.imageWrapper}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
