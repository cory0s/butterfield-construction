import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about/about'
import Hero from '../components/hero/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
