import React from 'react'
import * as styles from "./featuredBlogGrid.module.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const FeaturedBlogGrid = data => {
  const featuredPosts = useStaticQuery(graphql `
    {
        allWpPost(limit: 1) {
          nodes {
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            categories {
              nodes {
                name
                uri
              }
            }
            title
            uri
            date(formatString: "d MMMM Y")
            author {
              node {
                uri
                name
              }
            }
            excerpt
          }
        }
    }

    `)
  return (
        <section className={styles.featuredBlogGrid}>
            <div className={`${styles.featuredBlogGrid__flex} container container--wide`}>
                <div className={`${styles.featuredBlogGrid__featured}`}>
                    <h3>{data.latestTitle}</h3>
                    {featuredPosts.allWpPost.nodes.map((featuredPost,i) => (
                        <div className={`${styles.featuredBlogGrid__post}`} key={'post_' + i}>
                            <GatsbyImage
                                className={`${styles.featuredBlogGrid__post_image}`}
                                image={featuredPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                alt=""
                                height="400" />
                            <div className={`${styles.featuredBlogGrid__post_meta}`}>
                                <span>
                                    {featuredPost.categories.nodes.map((cat,i) => (
                                        <>
                                            <Link to={cat.uri} className={`${styles.featuredBlogGrid__post_cat}
                                            ${cat.name == "Announcements" ? styles.featuredBlogGrid__post_cat_announcements :
                                            cat.name == "Business" ? styles.featuredBlogGrid__post_cat_business :
                                            cat.name == "Design" ? styles.featuredBlogGrid__post_cat_design :
                                            cat.name == "Digital Marketing" ? styles.featuredBlogGrid__post_cat_digitalMarketing :
                                            cat.name == "General" ? styles.featuredBlogGrid__post_cat_general :
                                            cat.name == "SEO" ? styles.featuredBlogGrid__post_cat_seo :
                                            cat.name == "Social Media" ? styles.featuredBlogGrid__post_cat_socialMedia :
                                            cat.name == "Web Development" ? styles.featuredBlogGrid__post_cat_webDevelopment :
                                            cat.name == "WordPress" ? styles.featuredBlogGrid__post_cat_wordpress : ""}`} key={'cat_' + i}>
                                                {cat.name}
                                            </Link>
                                        </>
                                    ))}
                                </span>
                                <span>{featuredPost.date}</span>
                                <span className={`${styles.featuredBlogGrid__post_separator}`}>•</span>
                                <span><Link to={featuredPost.author.node.uri} className={`${styles.featuredBlogGrid__post_authorLink}`}>{featuredPost.author.node.name}</Link></span>
                            </div>
                          <h2>{featuredPost.title}</h2>
                          <div className={`${styles.featuredBlogGrid__post_excerpt}`} dangerouslySetInnerHTML={{__html: featuredPost.excerpt}}></div>
                        </div>
                    ))}

                </div>
                <div className={`${styles.featuredBlogGrid__mostPopular}`}>
                    <h3>{data.mostPopularTitle}</h3>
                </div>
            </div>
        </section>
  )
}

export default FeaturedBlogGrid
