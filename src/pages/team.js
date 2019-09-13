import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from '../components/team/team';

const TeamPage = () => (
    <Layout>
      <SEO title="Home" />
      <Team />
    </Layout>
)
  
export default TeamPage;