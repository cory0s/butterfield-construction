import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects/projects';

const Portfolio = () => (
    <Layout>
      <SEO title="Portfolio" />
      <Projects />
    </Layout>
)
  
export default Portfolio;