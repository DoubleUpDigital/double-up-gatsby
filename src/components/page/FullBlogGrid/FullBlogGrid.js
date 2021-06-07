import React from 'react'
import * as styles from "./fullBlogGrid.module.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const FullBlogGrid = data => {
  const fullPosts = useStaticQuery(graphql `
    {
        allWpPost {
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
          }
        }
    }

    `)
  return (
      <>
        <section className={styles.fullBlogGrid}>

            <div className={`container container--wide`}>
                <h2>{data.fullBlogTitle}</h2>
                <div className={`${styles.fullBlogGrid__flex}`}>
                    {fullPosts.allWpPost.nodes.map((fullPost,i) => (
                        <div className={`${styles.fullBlogGrid__post}`} key={'post_' + i}>
                            <span className={`${styles.fullBlogGrid__post_cats}`}>
                                {fullPost.categories.nodes.map((cat,i) => (
                                    <>
                                        <Link to={cat.uri} className={`${styles.fullBlogGrid__post_cat}
                                        ${cat.name == "Announcements" ? styles.fullBlogGrid__post_cat_announcements :
                                        cat.name == "Business" ? styles.fullBlogGrid__post_cat_business :
                                        cat.name == "Design" ? styles.fullBlogGrid__post_cat_design :
                                        cat.name == "Digital Marketing" ? styles.fullBlogGrid__post_cat_digitalMarketing :
                                        cat.name == "General" ? styles.fullBlogGrid__post_cat_general :
                                        cat.name == "SEO" ? styles.fullBlogGrid__post_cat_seo :
                                        cat.name == "Social Media" ? styles.fullBlogGrid__post_cat_socialMedia :
                                        cat.name == "Web Development" ? styles.fullBlogGrid__post_cat_webDevelopment :
                                        cat.name == "WordPress" ? styles.fullBlogGrid__post_cat_wordpress : ""}`} key={'cat_' + i}>
                                            {cat.name}
                                        </Link>
                                    </>
                                ))}
                            </span>
                            <Link to={fullPost.uri}>
                              <GatsbyImage
                                  className={`${styles.fullBlogGrid__post_image}`}
                                  image={fullPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                  alt=""
                                  height="400" />
                            </Link>
                            <div className={`${styles.fullBlogGrid__post_meta}`}>
                                <span>{fullPost.date}</span>
                                <span className={`${styles.fullBlogGrid__post_separator}`}>•</span>
                                <span><Link to={fullPost.author.node.uri} className={`${styles.fullBlogGrid__post_authorLink}`}>{fullPost.author.node.name}</Link></span>
                            </div>
                          <h2>
                            <Link to={fullPost.uri}>{fullPost.title}</Link>
                          </h2>
                          <div className={`${styles.fullBlogGrid__post_excerpt}`} dangerouslySetInnerHTML={{__html: fullPost.excerpt}}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </>
  )
}

export default FullBlogGrid
