import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about/about'
import Hero from '../components/hero/hero'
import Head from '../components/head/head';
// import Carousel from '../components/carousel/carousel'
// import Projects from '../components/projects/projects'

const IndexPage = () => (
  <Layout>
    <Head />
    <SEO title="Home" />
    <Hero />
    {/* <Carousel /> */}
    {/* <Projects /> */}
    <About />
  </Layout>
)

export default IndexPage
