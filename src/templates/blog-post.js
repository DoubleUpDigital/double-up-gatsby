import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import * as styles from "./blog-post.module.scss"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SquiggleTop2 from "../components/abstracts/squiggle-top-2"
import SubscribeForm from "../components/abstracts/SubscribeForm"

const BlogPostTemplate = ({ data: { previous, next, post, related, options } }) => {
  const featuredImage = {
    gatsbyImageData: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} />

      <article
        className={styles.blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <section className={styles.blogPost__hero}>
          <div className="container">
            <div className={`${styles.blogPost__catRow}`}>
                {post.categories.nodes.map((category, i) => (
                    <>
                    {category.name === "Uncategorized" ? '' :
                    <Link to={category.uri}><span className={`${styles.blogPost__category}
                    ${category.name === "Announcements" ? styles.blogPost__category_announcements :
                    category.name === "Business" ? styles.blogPost__category_business :
                    category.name === "Design" ? styles.blogPost__category_design :
                    category.name === "Digital Marketing" ? styles.blogPost__category_digitalMarketing :
                    category.name === "General" ? styles.blogPost__category_general :
                    category.name === "SEO" ? styles.blogPost__category_seo :
                    category.name === "Social Media" ? styles.blogPost__category_socialMedia :
                    category.name === "Web Development" ? styles.blogPost__category_webDevelopment :
                    category.name === "WordPress" ? styles.blogPost__category_wordpress : ""}`} key={'category_' + i}>{category.name}</span></Link> }
                    </>
                ))}
            </div>
            <h1 itemProp="headline" className={styles.blogPost__title}>{parse(post.title)}</h1>
            <div className={styles.blogPost__meta}>
              <span className={styles.blogPost__meta_date}>
                {post.date}
              </span>
              <span className={`${styles.blogPost__meta_separator}`}>•</span>
              <span className={styles.blogPost__meta_author}>{post.author.node.name}</span>
            </div>
          </div>
          {featuredImage?.gatsbyImageData && (
              <div className={`${styles.blogPost__featuredImage}`}>
                  <div className="container container--wide">
                      <GatsbyImage
                          className={`${styles.blogPost__banner}`}
                          image={featuredImage.gatsbyImageData}
                          alt={featuredImage.alt} />
                  </div>
              </div>
          )}
        </section>

        {!!post.content && (
          <section className={`${styles.blogPost__mainContent}`} itemProp="articleBody">
            <div className="container container--medium-2">
              <div className={`${styles.blogPost__content} margin-fix`}>
                {parse(post.content)}
              </div>
            </div>
          </section>
        )}

        <section><Bio author={post.author} /></section>

        <section className={`${styles.related}`}>
          <div className="container container--wide">
          <div className={`${styles.related__top}`}>
            <span className={`${styles.related__tag} tag`}>{options.siteGlobalSettings.siteOptions.relatedPosts.relatedTag}</span>
            <h2 className={styles.related__heading}>{options.siteGlobalSettings.siteOptions.relatedPosts.relatedHeading}</h2>
          </div>
            <div className={`${styles.related__flex}`}>
              {related.edges.map((relatedPost,i) => (
                  <div className={`${styles.related__post}`} key={'post_' + i}>
                    <div className={`${styles.related__cats}`}>
                    {relatedPost.node.categories.nodes.map((cat,i) => (
                        <>
                            <span className={`${styles.related__cat}
                            ${cat.name === "Announcements" ? styles.related__cat_announcements :
                            cat.name === "Business" ? styles.related__cat_business :
                            cat.name === "Design" ? styles.related__cat_design :
                            cat.name === "Digital Marketing" ? styles.related__cat_digitalMarketing :
                            cat.name === "General" ? styles.related__cat_general :
                            cat.name === "SEO" ? styles.related__cat_seo :
                            cat.name === "Social Media" ? styles.related__cat_socialMedia :
                            cat.name === "Web Development" ? styles.related__cat_webDevelopment :
                            cat.name === "WordPress" ? styles.related__cat_wordpress : ""}`} key={'cat_' + i}>
                                {cat.name}
                            </span>
                        </>
                    ))}
                    </div>
                      <Link to={relatedPost.node.uri}><GatsbyImage
                          className={`${styles.related__image}`}
                          image={relatedPost.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                          alt=""
                          height="400" /></Link>
                      <div className={`${styles.related__meta}`}>
                          <span>{relatedPost.node.date}</span>
                          <span className={`${styles.related__separator}`}>•</span>
                          <span><Link to={relatedPost.node.author.node.uri} className={`${styles.related__author}`}>{relatedPost.node.author.node.name}</Link></span>
                      </div>
                    <h3><Link to={relatedPost.node.uri}>{relatedPost.node.title}</Link></h3>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.subscribe}`}>
          <SquiggleTop2 />
          <div className={`${styles.subscribe__inner}`}>
            <div className="container container--slider">
              <div className={`${styles.subscribe__graphic}`}>
                <GatsbyImage
                    className={`${styles.subscribe__image}`}
                    image={options.siteGlobalSettings.siteOptions.blogSubscribe.subscribeGraphic.localFile.childImageSharp.gatsbyImageData}
                    alt={options.siteGlobalSettings.siteOptions.blogSubscribe.subscribeGraphic.altText}/>
              </div>
              <span className={`${styles.subscribe__tag} tag`}>{options.siteGlobalSettings.siteOptions.blogSubscribe.subscribeTag}</span>
              <h2 className={styles.subscribe__heading}>{options.siteGlobalSettings.siteOptions.blogSubscribe.subscribeHeading}</h2>
              <SubscribeForm/>
            </div>
          </div>
        </section>

        <footer className={`${styles.blogPost__footer}`}>

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
