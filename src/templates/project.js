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

import WordPressLogo from "../ui/wordpress.svg"
import GatsbyLogo from "../ui/gatsby.svg"
import ShopifyLogo from "../ui/shopify.svg"
import WooCommerceLogo from "../ui/woocommerce.svg"

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectTemplate = ({ data: { post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const companyLogo = post.projectDetails.companyLogo
  const projectMockup = post.projectDetails.mockup

  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

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
          <div className="container">
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

            <div className="project__meta-info">
              <div className="project__meta-info-block">
                  <span className="tag" style={{
                    color: post.projectDetails.brandColor,
                    background: hexToRGB(post.projectDetails.brandColor, .1)
                  }}>What we did</span>
                  <h3>{post.projectDetails.whatWeDid}</h3>
              </div>
              <div className="project__meta-info-block">
                  <span className="tag" style={{
                    color: post.projectDetails.brandColor,
                    background: hexToRGB(post.projectDetails.brandColor, .1)
                  }}>Platform</span>
                  <div className="project__meta-platforms">
                      {post.projectDetails.platform.map((item) => (
                          <div className="project__meta-platforms-item">
                          {item === 'wordpress' &&
                              <img src={WordPressLogo} alt="" />
                          }
                          {item === 'woocommerce' &&
                              <img src={WooCommerceLogo} alt="" />
                          }
                          {item === 'shopify' &&
                              <img src={ShopifyLogo} alt="" />
                          }
                          {item === 'gatsby' &&
                              <img src={GatsbyLogo} alt="" />
                          }
                          </div>
                      ))}
                  </div>
              </div>
              {post.projectDetails.website && (
                <div className="project__meta-info-cta">
                  <a href={post.projectDetails.website} className="button button--inverted" target="_blank" rel="noopener noreferrer" style={{
                    boxShadow: `10px 10px 30px ${hexToRGB(post.projectDetails.brandColor, .15)}`
                  }}>
                    <span className="button__text" style={{
                      color: post.projectDetails.brandColor
                    }}>
                      View Website
                    </span>
                    <span className="button__orb" style={{
                      backgroundColor: post.projectDetails.brandColor
                    }}>
                      <FontAwesomeIcon icon={faLongArrowRight} />
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {!!post.content && (
        <section className="project__overview">
          <div className="container">
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
        website
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
