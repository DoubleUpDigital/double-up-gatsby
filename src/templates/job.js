import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import * as styles from "./job.scss"

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const JobTemplate = ({ data: { post } }) => {

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} />

      <article
        className="jobSingle"
        itemScope
        itemType="http://schema.org/JobPosting"
      >
        <div class="container container--slider">
            <h1 itemProp="headline">{parse(post.title)}</h1>
            <span className="jobSingle__meta">
              Posted on {post.date}
              <span className="jobSingle__meta_separator">•</span>
              {post.jobsType}
              <span className="jobSingle__meta_separator">•</span>
              {post.jobsCity}, {post.jobsState}
              <span className="jobSingle__meta_separator">•</span>
              {post.jobsDepartment}
            </span>
            <div className="jobSingle__applyLink">
              {post.jobOptions.applicationLink.url ?
                <Link className="button button--inverted" to={post.jobOptions.applicationLink.url} target={post.jobOptions.applicationLink.target}>
                <span className="button__text">Apply Now</span>
                <span className="button__orb">
                  <FontAwesomeIcon icon={faLongArrowRight} />
                </span>
                </Link>
                :
                <Link to="https://doubleupdigital.applytojob.com/apply" target="_blank">Apply Now</Link>
              }
            </div>
            <div className="jobSingle__content">
              {parse(post.jobsDescription)}
            </div>
            <div className="jobSingle__applyLink">
              {post.jobOptions.applicationLink.url ?
                <Link className="button button--inverted" to={post.jobOptions.applicationLink.url} target={post.jobOptions.applicationLink.target}>
                <span className="button__text">Apply Now</span>
                <span className="button__orb">
                  <FontAwesomeIcon icon={faLongArrowRight} />
                </span>
                </Link>
                :
                <Link to="https://doubleupdigital.applytojob.com/apply" target="_blank">Apply Now</Link>
              }
            </div>
        </div>

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
      date(formatString: "MMMM DD, YYYY")
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
      jobOptions {
        applicationLink {
          target
          title
          url
        }
      }
    }
  }
`
