import React from 'react'
import * as styles from "./featuredBlogGrid.scss"
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
                    gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: TRACED_SVG
                      quality: 80
                      formats: [AUTO, WEBP]
                      outputPixelDensities: [1.5, 2]
                      width: 680
                      height: 400
                      transformOptions: {cropFocus: NORTH}
                    )
                  }
                }
              }
            }
            categories {
              nodes {
                name
                uri
                categoryOptions {
                  color
                }
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
        <section className="featuredBlogGrid">
            <div className="featuredBlogGrid__flex container container--wide">
                <div className="featuredBlogGrid__featured">
                    <h3 className="featuredBlogGrid__heading">{data.latestTitle}</h3>
                    {featuredPosts.allWpPost.nodes.map((featuredPost,i) => (
                        <div className="featuredBlogGrid__post" key={'post_' + i}>
                            <Link to={featuredPost.uri}><GatsbyImage
                                className="featuredBlogGrid__post_image"
                                image={featuredPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                alt=""
                                height="400" /></Link>
                            <div className="featuredBlogGrid__post_meta">
                                <div className="featuredBlogGrid__post_cats">
                                    {featuredPost.categories.nodes.map((cat,i) => (
                                        <span className="tag tag--small" style={{
                                            color: cat.categoryOptions.color,
                                            background: hexToRGB(cat.categoryOptions.color, .1)
                                        }}>{cat.name}</span>
                                    ))}
                                </div>
                                <span>{featuredPost.date}</span>
                                <span className="featuredBlogGrid__post_separator">•</span>
                                <span className="featuredBlogGrid__post_authorLink">{featuredPost.author.node.name}</span>
                            </div>
                          <h2><Link to={featuredPost.uri}>{featuredPost.title}</Link></h2>
                        </div>
                    ))}

                </div>
                <div className="featuredBlogGrid__mostPopular">
                    <h3 className="featuredBlogGrid__heading">{data.mostPopularTitle}</h3>
                    <div className="featuredBlogGrid__mostPopular_col">
                        {data.mostPopularPosts.map((popularPost,i) => (
                            <Link to={popularPost.uri} className="featuredBlogGrid__mostPopular_single" key={'popularPost_' + i}>
                                <GatsbyImage
                                    image={popularPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                    className="featuredBlogGrid__mostPopular_image" />
                                <div className="featuredBlogGrid__mostPopular_content">
                                    <div className="featuredBlogGrid__post_cats">
                                        {popularPost.categories.nodes.map((cat,i) => (
                                            <span className="tag tag--small" style={{
                                                color: cat.categoryOptions.color,
                                                background: hexToRGB(cat.categoryOptions.color, .1)
                                            }}>{cat.name}</span>
                                        ))}
                                    </div>
                                    <h3 className="featuredBlogGrid__mostPopular_title"><Link to={popularPost.uri}>{popularPost.title}</Link></h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FeaturedBlogGrid
