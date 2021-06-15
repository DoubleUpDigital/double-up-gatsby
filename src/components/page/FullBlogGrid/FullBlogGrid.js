import React, { useState, useEffect } from 'react'
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
        allWpCategory {
            nodes {
                name
            }
        }
    }

    `)

// Array of all news articles
  const allNews = fullPosts.allWpPost.nodes

  // State for the list
  const [list, setList] = useState([...allNews.slice(0, 9)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 9)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allNews.length
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 9)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
      <section className={styles.fullBlogGrid}>

          <div className={`container container--wide`}>
              <h3>{data.fullBlogTitle}</h3>
              <div className={`${styles.fullBlogGrid__catRow}`}>
                  <span key={'category_all'} className={`${styles.fullBlogGrid__category}`}>All</span>
                  {fullPosts.allWpCategory.nodes.map((category, i) => (
                      <>
                      {category.name === "Uncategorized" ? '' :
                      <span className={`${styles.fullBlogGrid__category}
                      ${category.name === "Announcements" ? styles.fullBlogGrid__category_announcements :
                      category.name === "Business" ? styles.fullBlogGrid__category_business :
                      category.name === "Design" ? styles.fullBlogGrid__category_design :
                      category.name === "Digital Marketing" ? styles.fullBlogGrid__category_digitalMarketing :
                      category.name === "General" ? styles.fullBlogGrid__category_general :
                      category.name === "SEO" ? styles.fullBlogGrid__category_seo :
                      category.name === "Social Media" ? styles.fullBlogGrid__category_socialMedia :
                      category.name === "Web Development" ? styles.fullBlogGrid__category_webDevelopment :
                      category.name === "WordPress" ? styles.fullBlogGrid__category_wordpress : ""}`} key={'category_' + i}>{category.name}</span> }
                      </>
                  ))}
              </div>
              <div className={`${styles.fullBlogGrid__flex}`}>
                  {list.map((fullPost,i) => (
                      <>
                          <div className={`${styles.fullBlogGrid__post}`} key={'post_' + i}>
                              <span className={`${styles.fullBlogGrid__post_cats}`}>
                                  {fullPost.categories.nodes.map((cat,i) => (
                                      <>
                                          <span className={`${styles.fullBlogGrid__post_cat}
                                          ${cat.name === "Announcements" ? styles.fullBlogGrid__post_cat_announcements :
                                          cat.name === "Business" ? styles.fullBlogGrid__post_cat_business :
                                          cat.name === "Design" ? styles.fullBlogGrid__post_cat_design :
                                          cat.name === "Digital Marketing" ? styles.fullBlogGrid__post_cat_digitalMarketing :
                                          cat.name === "General" ? styles.fullBlogGrid__post_cat_general :
                                          cat.name === "SEO" ? styles.fullBlogGrid__post_cat_seo :
                                          cat.name === "Social Media" ? styles.fullBlogGrid__post_cat_socialMedia :
                                          cat.name === "Web Development" ? styles.fullBlogGrid__post_cat_webDevelopment :
                                          cat.name === "WordPress" ? styles.fullBlogGrid__post_cat_wordpress : ""}`} key={'cat_' + i}>
                                              {cat.name}
                                          </span>
                                      </>
                                  ))}
                              </span>
                              <Link to={fullPost.uri}><GatsbyImage
                                  className={`${styles.fullBlogGrid__post_image}`}
                                  image={fullPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                  alt=""
                                  height="400" /></Link>
                              <div className={`${styles.fullBlogGrid__post_meta}`}>
                                  <span>{fullPost.date}</span>
                                  <span className={`${styles.fullBlogGrid__post_separator}`}>•</span>
                                  <span><Link to={fullPost.author.node.uri} className={`${styles.fullBlogGrid__post_authorLink}`}>{fullPost.author.node.name}</Link></span>
                              </div>
                            <h2><Link to={fullPost.uri}>{fullPost.title}</Link></h2>
                            <div className={`${styles.fullBlogGrid__post_excerpt}`} dangerouslySetInnerHTML={{__html: fullPost.excerpt}}></div>
                          </div>
                      </>
                  ))}
              </div>
                <div className={`${styles.fullBlogGrid__loadMore}`}>
                    {hasMore ? (
                        <button onClick={handleLoadMore}>Load More</button>
                        ) : (
                        <p>No more results</p>
                    )}
                </div>
          </div>
      </section>
  )
}

export default FullBlogGrid
