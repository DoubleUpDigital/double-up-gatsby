import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import "./project.scss"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Vimeo from 'react-vimeo-embed';

import { Parallax } from 'react-scroll-parallax';

import WordPressLogo from "../ui/wordpress.svg"
import GatsbyLogo from "../ui/gatsby.svg"
import ShopifyLogo from "../ui/shopify.svg"
import WooCommerceLogo from "../ui/woocommerce.svg"

import { faLongArrowRight, faLongArrowLeft, faCheck } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectTemplate = ({ data: { post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const companyLogo = post.projectDetails.companyLogo
  const projectMockup = post.projectDetails.mockup
  const screenshotDesktop = post.projectDetails.screenshots.fullPageDesktop

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
      <SEO
        title={post.seo.title}
        description={post.seo.metaDesc}
        imageURL={post.seo.opengraphImage.localFile.publicURL}
        index={post.seo.metaRobotsNoindex}
        follow={post.seo.metaRobotsNofollow} />
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

            {post.projectDetails.website && (
              <div className="project__meta-info-cta project__meta-info-cta-mobile">
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


            <div className="project__mockup">
              <StaticImage
                className="project__mockup-back"
                src="../ui/imac-mockup.png"
                placeholder="tracedSVG"
                quality="90"
                alt="" />
              <div className="project__mockup-front">
                <div className="project__mockup-front-inner">
                {post.projectDetails.mockupVideo
                  ? <Vimeo
                      video={post.projectDetails.mockupVideo}
                      background="true"
                      loop="true"
                      responsive="true"
                      className="project__mockup-video"
                    />
                  : <GatsbyImage
                      className="project__mockup-image"
                      image={screenshotDesktop.localFile.childImageSharp.gatsbyImageData} />
                }
                </div>
              </div>
            </div>


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
                <div className="project__meta-info-cta project__meta-info-cta-desktop">
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

        {post.projectDetails.contentSection1?.image && (
          <section className="project__cs">
            <div className="container">
              <div className="project__cs-cols">
                <div className="project__cs-cols-content">
                  <span className="tag" style={{
                    color: post.projectDetails.brandColor,
                    background: hexToRGB(post.projectDetails.brandColor, .1)
                  }}>{post.projectDetails.contentSection1.sectionLabel}</span>
                  <h2 className="project__cs-heading">{post.projectDetails.contentSection1.heading}</h2>
                  <div className="project__cs-content margin-fix" dangerouslySetInnerHTML={{__html:post.projectDetails.contentSection1.content}}></div>
                </div>
                <div className="project__cs-cols-image">
                  <GatsbyImage
                    className="project__cs-image"
                    image={post.projectDetails.contentSection1.image.localFile.childImageSharp.gatsbyImageData} />
                </div>
              </div>
            </div>
          </section>
        )}
        {post.projectDetails.screenshots.fullPageDesktop && post.projectDetails.screenshots.fullPageMobile && (
        <section className="project__scroller">
          <div className="container container--full">
            <div className="project__scroller-box" style={{
              background: post.projectDetails.brandColor
            }}>
              <Parallax
                className="project__scroller-desktop-1"
                y={[10, -30]}>
                <GatsbyImage
                  className="project__scroller-image"
                  image={post.projectDetails.screenshots.fullPageDesktop.localFile.childImageSharp.gatsbyImageData} />
              </Parallax>
              <Parallax
                className="project__scroller-desktop-2"
                y={[-20, 20]}>
                <GatsbyImage
                  className="project__scroller-image"
                  image={post.projectDetails.screenshots.fullPageDesktop.localFile.childImageSharp.gatsbyImageData} />
              </Parallax>
              <Parallax
                className="project__scroller-mobile-1"
                y={[10, 0]}>
                <GatsbyImage
                  className="project__scroller-image"
                  image={post.projectDetails.screenshots.fullPageMobile.localFile.childImageSharp.gatsbyImageData} />
              </Parallax>
              <Parallax
                className="project__scroller-mobile-2"
                y={[-10, 10]}>
                <GatsbyImage
                  className="project__scroller-image"
                  image={post.projectDetails.screenshots.fullPageMobile.localFile.childImageSharp.gatsbyImageData} />
              </Parallax>
            </div>
          </div>
        </section>
        )}

        {post.projectDetails.contentSection2?.image && (
          <section className="project__cs">
            <div className="container">
              <div className="project__cs-cols project__cs-cols--reverse">
                <div className="project__cs-cols-content">
                  <span className="tag" style={{
                    color: post.projectDetails.brandColor,
                    background: hexToRGB(post.projectDetails.brandColor, .1)
                  }}>{post.projectDetails.contentSection2.sectionLabel}</span>
                  <h2 className="project__cs-heading">{post.projectDetails.contentSection2.heading}</h2>
                  <div className="project__cs-content margin-fix" dangerouslySetInnerHTML={{__html:post.projectDetails.contentSection2.content}}></div>
                </div>
                <div className="project__cs-cols-image">
                  <GatsbyImage
                    className="project__cs-image"
                    image={post.projectDetails.contentSection2.image.localFile.childImageSharp.gatsbyImageData} />
                </div>
              </div>
            </div>
          </section>
        )}

        {post.projectDetails.checkListContent?.sectionLabel && (
          <section className="project__checklist">
            <div className="container">
              <span className="tag" style={{
                color: post.projectDetails.brandColor,
                background: hexToRGB(post.projectDetails.brandColor, .1)
              }}>{post.projectDetails.checkListContent.sectionLabel}</span>
              <h2 className="project__checklist-heading">{post.projectDetails.checkListContent.heading}</h2>
              <div className="project__checklist-content margin-fix" dangerouslySetInnerHTML={{__html:post.projectDetails.checkListContent.content}}></div>
              <div className="project__checklist-list">
              {post.projectDetails.checkListContent.checkList.map((item) => (
                <div className="project__checklist-item">
                  <span className="project__checklist-item-icon" style={{
                    background: post.projectDetails.brandColor
                  }}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="project__checklist-item-text">{item.text}</span>
                </div>
              ))}
              </div>
            </div>
          </section>
        )}

        <section className="project__mobileSlideshow">
          <div className="container container--xl">
            <div className="project__mobileSlideshow-inner" style={{background: post.projectDetails.brandColor}}>
              <div className="project__mobileSlideshow-slides">
                {post.projectDetails.mobileSlideshow.map((screenshot, i) => (
                  <div className="project__mobileSlideshow-slide">
                    <GatsbyImage
                      className="project__cs-image"
                      image={screenshot.screenshot.localFile.childImageSharp.gatsbyImageData} />
                  </div>
                ))}
                {post.projectDetails.mobileSlideshow.map((screenshot, i) => (
                  <div className="project__mobileSlideshow-slide">
                    <GatsbyImage
                      className="project__cs-image"
                      image={screenshot.screenshot.localFile.childImageSharp.gatsbyImageData} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {post.projectDetails.numberListContent?.sectionLabel && (
          <section className="project__numberlist">
            <div className="container">
              <span className="tag" style={{
                color: post.projectDetails.brandColor,
                background: hexToRGB(post.projectDetails.brandColor, .1)
              }}>{post.projectDetails.numberListContent.sectionLabel}</span>
              <h2 className="project__numberlist-heading">{post.projectDetails.numberListContent.heading}</h2>
              <div className="project__numberlist-content margin-fix" dangerouslySetInnerHTML={{__html:post.projectDetails.numberListContent.content}}></div>
              <div className="project__numberlist-list">
              {post.projectDetails.numberListContent.numberList.map((item, i) => (
                <div className="project__numberlist-item" key={'numberListItem-' + i}>
                  <span className="project__numberlist-item-index" style={{
                    color: post.projectDetails.brandColor
                  }}>
                    {'0' + (parseInt(i) + 1)}
                  </span>
                  <h3 className="project__numberlist-item-heading">{item.heading}</h3>
                  <div className="project__numberlist-item-content margin-fix" dangerouslySetInnerHTML={{__html:item.content}}></div>
                </div>
              ))}
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
        opengraphImage {
          localFile {
            publicURL
          }
        }
        metaRobotsNoindex
      }
      projectDetails {
        brandColor
        whatWeDid
        platform
        website
        mockupVideo
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
        screenshots {
          fullPageDesktop {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 926
                  placeholder: BLURRED
                  quality: 60
                  layout: CONSTRAINED
                  outputPixelDensities: [1.5, 2]
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          fullPageMobile {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 141
                  placeholder: BLURRED
                  quality: 60
                  layout: CONSTRAINED
                  outputPixelDensities: [1.5, 2]
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
        contentSection1 {
          sectionLabel
          heading
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 446
                  formats: [WEBP, AUTO]
                  placeholder: BLURRED
                  outputPixelDensities: [1.5, 2]
                  quality: 80
                )
              }
            }
          }
        }
        contentSection2 {
          sectionLabel
          heading
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 446
                  formats: [WEBP, AUTO]
                  placeholder: BLURRED
                  outputPixelDensities: [1.5, 2]
                  quality: 80
                )
              }
            }
          }
        }
        testimonial {
          ... on WpTestimonial {
            title
            content
          }
        }
        checkListContent {
          sectionLabel
          heading
          content
          checkList {
            text
          }
        }
        mobileSlideshow {
          screenshot {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 198
                  formats: [WEBP, AUTO]
                  placeholder: BLURRED
                  outputPixelDensities: [1.5, 2]
                  quality: 80
                )
              }
            }
          }
        }
        numberListContent {
          sectionLabel
          heading
          content
          numberList {
            heading
            content
          }
        }
        cta {
          label
          heading
          link {
            target
            title
            url
          }
        }
      }
    }
  }
`
