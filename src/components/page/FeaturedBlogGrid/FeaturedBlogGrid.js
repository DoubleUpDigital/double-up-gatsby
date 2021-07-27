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
        <section className="featuredBlogGrid">
            <div className="featuredBlogGrid__flex container container--wide">
                <div className="featuredBlogGrid__featured">
                    <h3>{data.latestTitle}</h3>
                    {featuredPosts.allWpPost.nodes.map((featuredPost,i) => (
                        <div className="featuredBlogGrid__post" key={'post_' + i}>
                            <Link to={featuredPost.uri}><GatsbyImage
                                className="featuredBlogGrid__post_image"
                                image={featuredPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                alt=""
                                height="400" /></Link>
                            <div className="featuredBlogGrid__post_meta">
                                <span>
                                    {featuredPost.categories.nodes.map((cat,i) => (
                                        <>
                                            <Link to={cat.uri} className={`featuredBlogGrid__post_cat
                                            ${cat.name === "Announcements" ? "featuredBlogGrid__post_cat_announcements" :
                                            cat.name === "Business" ? "featuredBlogGrid__post_cat_business" :
                                            cat.name === "Design" ? "featuredBlogGrid__post_cat_design" :
                                            cat.name === "Digital Marketing" ? "featuredBlogGrid__post_cat_digitalMarketing" :
                                            cat.name === "General" ? "featuredBlogGrid__post_cat_general" :
                                            cat.name === "Launch Updates" ? "featuredBlogGrid__post_cat_launchUpdates" :
                                            cat.name === "SEO" ? "featuredBlogGrid__post_cat_seo" :
                                            cat.name === "Social Media" ? "featuredBlogGrid__post_cat_socialMedia" :
                                            cat.name === "Web Development" ? "featuredBlogGrid__post_cat_webDevelopment" :
                                            cat.name === "WordPress" ? "featuredBlogGrid__post_cat_wordpress" : ""}`} key={'cat_' + i}>
                                                {cat.name}
                                            </Link>
                                        </>
                                    ))}
                                </span>
                                <span>{featuredPost.date}</span>
                                <span className="featuredBlogGrid__post_separator">•</span>
                                <span className="featuredBlogGrid__post_authorLink">{featuredPost.author.node.name}</span>
                            </div>
                          <h2><Link to={featuredPost.uri}>{featuredPost.title}</Link></h2>
                          <div className="featuredBlogGrid__post_excerpt" dangerouslySetInnerHTML={{__html: featuredPost.excerpt}}></div>
                        </div>
                    ))}

                </div>
                <div className="featuredBlogGrid__mostPopular">
                    <h3>{data.mostPopularTitle}</h3>
                    <div className="featuredBlogGrid__mostPopular_col">
                        {data.mostPopularPosts.map((popularPost,i) => (
                            <>
                            <div key={'popularPost_' + i} className="featuredBlogGrid__mostPopular_single">
                                <Link to={popularPost.uri} className="featuredBlogGrid__mostPopular_image">
                                    <GatsbyImage
                                        image={popularPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                        className="featuredBlogGrid__mostPopular_image_img" />
                                </Link>
                                <div className="featuredBlogGrid__mostPopular_content">
                                    {popularPost.categories.nodes.map((cat2,i) => (
                                        <span className={`featuredBlogGrid__post_cat
                                        ${cat2.name === "Announcements" ? "featuredBlogGrid__post_cat_announcements" :
                                        cat2.name === "Business" ? "featuredBlogGrid__post_cat_business" :
                                        cat2.name === "Design" ? "featuredBlogGrid__post_cat_design" :
                                        cat2.name === "Digital Marketing" ? "featuredBlogGrid__post_cat_digitalMarketing" :
                                        cat2.name === "General" ? "featuredBlogGrid__post_cat_general" :
                                        cat2.name === "Launch Updates" ? "featuredBlogGrid__post_cat_launchUpdates" :
                                        cat2.name === "SEO" ? "featuredBlogGrid__post_cat_seo" :
                                        cat2.name === "Social Media" ? "featuredBlogGrid__post_cat_socialMedia" :
                                        cat2.name === "Web Development" ? "featuredBlogGrid__post_cat_webDevelopment" :
                                        cat2.name === "WordPress" ? "featuredBlogGrid__post_cat_wordpress" : ""}`} key={'cat2_' + i}>
                                            {cat2.name}
                                        </span>
                                    ))}
                                    <h3><Link to={popularPost.uri}>{popularPost.title}</Link></h3>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FeaturedBlogGrid
