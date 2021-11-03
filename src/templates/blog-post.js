import React, { useEffect, createRef } from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import * as styles from "./blog-post.scss"

import lottie from "lottie-web"
import subscribeAnimation from "/content/assets/subscribe.json"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SquiggleTop2 from "../components/abstracts/squiggle-top-2"
import SubscribeForm from "../components/abstracts/SubscribeForm"

const BlogPostTemplate = ({ data: { previous, next, post, related, options } }) => {

  let animation = createRef()

  const animationData = subscribeAnimation

  useEffect(() => {
    if(animationData) {
      lottie.loadAnimation({
        container: animation.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
        assetsPath: '/animation-homepage-hero/',
        renderer: 'svg',
        rendererSettings: {
          progressiveLoad: true
        }
      })
    }
  })

  const featuredImage = {
    gatsbyImageData: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} imageURL={post.seo.opengraphImage.localFile.publicURL} />

      <article
        className="blogPost"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section className="blogPost__hero">
          <div className="container">
            <div className="blogPost__catRow">
                {post.categories.nodes.map((category, i) => (
                    <>
                    {category.name === "Uncategorized" ? '' :
                    <span className={`blogPost__category
                    ${category.name === "Announcements" ? "blogPost__category_announcements" :
                    category.name === "Business" ? "blogPost__category_business" :
                    category.name === "Design" ? "blogPost__category_design" :
                    category.name === "Digital Marketing" ? "blogPost__category_digitalMarketing" :
                    category.name === "General" ? "blogPost__category_general" :
                    category.name === "Launch Updates" ? "blogPost__category_launchUpdates" :
                    category.name === "SEO" ? "blogPost__category_seo" :
                    category.name === "Social Media" ? "blogPost__category_socialMedia" :
                    category.name === "Web Development" ? "blogPost__category_webDevelopment" :
                    category.name === "WordPress" ? "blogPost__category_wordpress" : ""}`} key={'category_' + i}>{category.name}</span> }
                    </>
                ))}
            </div>
            <h1 itemProp="headline" className="blogPost__title">{parse(post.title)}</h1>
            <div className="blogPost__meta">
              <span className="blogPost__meta_date">
                {post.date}
              </span>
              <span className="blogPost__meta_separator">•</span>
              <span className="blogPost__meta_author">{post.author.node.name}</span>
            </div>
          </div>
          {featuredImage?.gatsbyImageData && (
              <div className="blogPost__featuredImage">
                  <div className="container container--wide">
                      <GatsbyImage
                          className="blogPost__banner"
                          image={featuredImage.gatsbyImageData}
                          alt={featuredImage.alt} />
                  </div>
              </div>
          )}
        </section>

        {!!post.content && (
          <section className="blogPost__mainContent" itemProp="articleBody">
            <div className="container container--medium-2">
              <div className="blogPost__content margin-fix">
                {parse(post.content)}
              </div>
            </div>
          </section>
        )}

        <section><Bio author={post.author} /></section>

        <section className="related">
          <div className="container container--wide">
          <div className="related__top">
            <span className="related__tag tag">{options.siteGlobalSettings.siteOptions.relatedPosts.relatedTag}</span>
            <h2 className="related__heading">{options.siteGlobalSettings.siteOptions.relatedPosts.relatedHeading}</h2>
          </div>
            <div className="related__flex">
              {related.edges.map((relatedPost,i) => (
                  <div className="related__post" key={'post_' + i}>
                    <div className="related__cats">
                    {relatedPost.node.categories.nodes.map((cat,i) => (
                        <>
                            <span className={`related__cat
                            ${cat.name === "Announcements" ? "related__cat_announcements" :
                            cat.name === "Business" ? "related__cat_business" :
                            cat.name === "Design" ? "related__cat_design" :
                            cat.name === "Digital Marketing" ? "related__cat_digitalMarketing" :
                            cat.name === "General" ? "related__cat_general" :
                            cat.name === "Launch Updates" ? "related__cat_launchUpdates" :
                            cat.name === "SEO" ? "related__cat_seo" :
                            cat.name === "Social Media" ? "related__cat_socialMedia" :
                            cat.name === "Web Development" ? "related__cat_webDevelopment" :
                            cat.name === "WordPress" ? "related__cat_wordpress" : ""}`} key={'cat_' + i}>
                                {cat.name}
                            </span>
                        </>
                    ))}
                    </div>
                      <Link to={relatedPost.node.uri}><GatsbyImage
                          className="related__image"
                          image={relatedPost.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                          alt=""
                          height="400" /></Link>
                      <div className="related__meta">
                          <span>{relatedPost.node.date}</span>
                          <span className="related__separator">•</span>
                          <span className="related__author">{relatedPost.node.author.node.name}</span>
                      </div>
                    <h3><Link to={relatedPost.node.uri}>{relatedPost.node.title}</Link></h3>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="subscribe">
          <SquiggleTop2 />
          <div className="subscribe__inner">
            <div className="container container--slider">
              <div className="subscribe__graphic">
                <div className="subscribe__animation" ref={animation} />
              </div>
              <span className="subscribe__tag tag">{options.siteGlobalSettings.siteOptions.blogSubscribe.subscribeTag}</span>
              <h2 className="subscribe__heading">{options.siteGlobalSettings.siteOptions.blogSubscribe.subscribeHeading}</h2>
              <SubscribeForm/>
            </div>
          </div>
        </section>

        <footer className="blogPost__footer">

        </footer>
      </article>

    </Layout>
  )

  function handleError({values, error, reset}) {
      //handle error
  }
  function handleSuccess({values, reset, confirmations}) {
      //handle success
  }
}

export default BlogPostTemplate



export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          name
          uri
          userOptions {
            teamMember {
              ... on WpTeamMember {
                content
                title
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      seo {
				title
				metaDesc
        opengraphImage {
          localFile {
            publicURL
          }
        }
			}
      categories {
        nodes {
          name
          uri
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 70
                formats: [AUTO, WEBP]
                outputPixelDensities: [1.5, 2]
                width: 1170
                height: 500
                transformOptions: {cropFocus: ATTENTION}
              )
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }

    related: allWpPost(limit: 3, filter:{id: { ne: $id }}) {
      edges {
        node {
          title
          uri
          date(formatString: "MMMM DD, YYYY")
          author {
            node {
              name
              uri
            }
          }
          categories {
            nodes {
              name
              uri
            }
          }
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
    }

    options: wp {
      siteGlobalSettings {
        siteOptions {
          relatedPosts {
            relatedHeading
            relatedTag
          }
          blogSubscribe {
            subscribeTag
            subscribeHeading
            subscribeGraphic {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
