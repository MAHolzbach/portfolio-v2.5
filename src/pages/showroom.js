import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Details from "../components/details"

const showroomProjectData = {
  projectTitle: "Showroom",
  subtitle:
    "You can view some screenshots of the site here. Visiting the page itself will require creation of a Carfax account, which is completely free to do, here: ",
  tools:
    "React, Pug, Sass, ES6, Webpack, Enzyme/Jest, and RESTful API consumption.",
  task:
    "Create a central place where Carfax users can run and view Vehicle History Reports in order to modernize and simplify user's experience while improving conversion and driving traffic to the purchase page.",
  challenges:
    "Keeping the site fast despite a heavy data fetch. Creating that data fetch from multiple endpoints. What to test?",
  results:
    "This site recieves #### visitors per day, and has resulted in a #% improvement in revenue for Carfax.",
  comments:
    "This was my first production React project, so I was pretty excited to dive into it. Similar in design and tooling to the VHR Landing Page, it is built using Pug for HTML templating, Sass for the styling, and React for the center piece component that actually displays some basic data of the reports a user has run. This was also my first time getting deep into the Webpack tooling piece, as well as writing detailed tests. Both were significant learning experiences, in particular getting a feel for what should and should not be tested.",
  team: "Mike Dolan, Erik Luetkehans, Carol Li (designer)",
}

const showroomDetailsPage = () => (
  <Layout detailsPage={true}>
    <SEO title="Showroom" />
    <Details data={showroomProjectData} />
  </Layout>
)

export default showroomDetailsPage
