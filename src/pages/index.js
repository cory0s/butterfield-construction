import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about/about'
// import Hero from '../components/hero/hero'
import Carousel from '../components/carousel/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Hero /> */}
    <Carousel />
    <About />
  </Layout>
)

export default IndexPage
