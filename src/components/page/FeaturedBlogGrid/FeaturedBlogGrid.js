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
                                    <Link to={featuredPost.categories.nodes.uri}>
                                        {featuredPost.categories.nodes.name}
                                    </Link>
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
