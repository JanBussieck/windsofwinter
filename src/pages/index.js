import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import grrmartin from "../images/grrmartin.gif"

const IndexPage = () => (
  <Layout>
    <SEO title="When is The Winds of Winter Coming Out?!" />
    <div className='content'>
      <h1>Not Today!</h1>
      <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
        <img src={grrmartin} alt="Naked Martin on a trampoline" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
