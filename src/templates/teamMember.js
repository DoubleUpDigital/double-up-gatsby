import React from "react"
import { Link, graphql } from "gatsby"

import "./teamMember.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamMemberTemplate = ({ data: { post } }) => {

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} />



    </Layout>
  )
}

export default TeamMemberTemplate

export const pageQuery = graphql`
  query TeamMemberById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpTeamMember(id: { eq: $id }) {
      id
      title
      seo {
          title
          metaDesc
      }
    }
  }
`
