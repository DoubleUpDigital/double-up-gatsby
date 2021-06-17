import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import "./project.scss"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTemplate = ({ data: { post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const companyLogo = post.projectDetails.companyLogo
  const projectMockup = post.projectDetails.mockup

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} />
      <div className="header-spacer"></div>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="project__header">
          <div className="container container">
            {companyLogo && (<div className="project__logo">
              <GatsbyImage
                className="project__logo-image"
                image={companyLogo.localFile.childImageSharp.gatsbyImageData} />
            </div>)}
            {post.projectDetails.whatWeDid && <h1
              className="project__heading"
              itemProp="headline"
              style={{
                color: post.projectDetails.brandColor
              }}>
              {parse(post.projectDetails.whatWeDid)}
            </h1>}
            {projectMockup && (
              <div className="project__mockup">
                <GatsbyImage
                  className="project__mockup-image"
                  image={projectMockup.localFile.childImageSharp.gatsbyImageData} />
              </div>
            )}
          </div>
        </header>

        {!!post.content && (
        <section className="project__overview">
          <div className="container container">
            <div className="project__overview-content">
              {parse(post.content)}
            </div>
          </div>
        </section>
        )}

      </article>

    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpProject(id: { eq: $id }) {
      id
      excerpt
      content
      title
      seo {
          title
          metaDesc
      }
      projectDetails {
        brandColor
        whatWeDid
        platform
        companyLogo {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 100
                formats: [WEBP, AUTO]
                placeholder: TRACED_SVG
                outputPixelDensities: [1.5, 2]
                quality: 80
              )
            }
          }
        }
        mockup {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 972
                formats: [WEBP, AUTO]
                placeholder: TRACED_SVG
                outputPixelDensities: [1.5, 2]
                quality: 80
              )
            }
          }
        }
        screenshots {
          fullPageDesktop {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 365
                  placeholder: BLURRED
                  quality: 80
                  layout: CONSTRAINED
                  outputPixelDensities: [1.5, 2]
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`
