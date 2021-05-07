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
        <section className={styles.featuredBlogGird}>
            <div className="container">
                <div className={`${styles.featuredBlogGird__featured}`}>
                {featuredPosts.allWpPost.nodes.map((featuredPost,i) => (
                    <div className={`${styles.allWpPost__post}`} key={'post_' + i}>
                      {featuredPost.title}
                    </div>
                ))}

                </div>
            </div>
        </section>
  )
}

export default FeaturedBlogGrid
