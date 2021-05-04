import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const JobTemplate = ({ data: { post } }) => {

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(post.title)}</h1>
        </header>

        <section itemProp="articleBody">
          <div className="container container--medium">
            <div className={`margin-fix`}>
              {parse(post.jobsDescription)}
            </div>
          </div>
        </section>

      </article>

    </Layout>
  )
}

export default JobTemplate

export const pageQuery = graphql`
  query JobById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpJob(id: { eq: $id }) {
      id
      title
      seo {
          title
          metaDesc
      }
      jobsCity
      jobsCountryId
      jobsDepartment
      jobsDescription
      jobsId
      jobsOriginalOpenDate
      jobsQuestionnaire
      jobsQuestionnaireQuestions
      jobsState
      jobsStateFull
      jobsStatus
      jobsType
      jobsZip
    }
  }
`
