import React, { useState, useEffect } from 'react'
import * as styles from "./fullBlogGrid.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const FullBlogGrid = data => {
  const fullPosts = useStaticQuery(graphql `
    {
        allWpPost(sort: {order: DESC, fields: date}) {
          edges {
            node {
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        quality: 70
                        formats: [AUTO, WEBP]
                        outputPixelDensities: [1.5, 2]
                        width: 350
                        height: 225
                        transformOptions: {cropFocus: ATTENTION}
                      )
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                  uri
                }
              }
              title
              uri
              date(formatString: "DD MMMM, YYYY")
              author {
                node {
                  uri
                  name
                }
              }
            }
          }
        }
        allWpCategory {
            nodes {
                name
                slug
                posts {
                  nodes {
                    title
                    uri
                    date(formatString: "d MMMM Y")
                    categories {
                      nodes {
                        name
                      }
                    }
                    featuredImage {
                      node {
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              layout: CONSTRAINED
                              placeholder: BLURRED
                              quality: 70
                              formats: [AUTO, WEBP]
                              outputPixelDensities: [1.5, 2]
                              width: 350
                              height: 225
                              transformOptions: {cropFocus: ATTENTION}
                            )
                          }
                        }
                      }
                    }
                    author {
                      node {
                        uri
                        name
                      }
                    }
                  }
                }
            }
        }
    }

    `)

    const [posts, setPosts] = useState(fullPosts.allWpPost.edges)
    const [selected, setSelected] = useState("all")

    // filtering function
    const filterPosts = value => {
      let posts = fullPosts.allWpPost.edges
      if (value !== "all") {
        posts = fullPosts.allWpPost.edges.filter(post =>
          post.node.categories.nodes.find(category => category.slug === value)
        )
      }
      setSelected(value)
      setPosts(posts)
    }

    // Array of all news articles
    const allNews = posts

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
      <section className="fullBlogGrid">

          <div className="container container--wide">
              <h3>{data.fullBlogTitle}</h3>
              <select onChange={e => filterPosts(e.target.value)} value={selected} className="fullBlogGrid__catRow">
                  <option key={'category_all'} value="all" className="fullBlogGrid__category">All</option>
                  {fullPosts.allWpCategory.nodes.map((category, i) => (
                      <>
                      {category.name === "Uncategorized" ? '' :
                      <option value={category.slug} className={`fullBlogGrid__category
                      ${category.name === "Announcements" ? "fullBlogGrid__category_announcements" :
                      category.name === "Business" ? "fullBlogGrid__category_business" :
                      category.name === "Design" ? "fullBlogGrid__category_design" :
                      category.name === "Digital Marketing" ? "fullBlogGrid__category_digitalMarketing" :
                      category.name === "General" ? "fullBlogGrid__category_general" :
                      category.name === "Launch Updates" ? "fullBlogGrid__category_launchUpdates" :
                      category.name === "SEO" ? "fullBlogGrid__category_seo" :
                      category.name === "Social Media" ? "fullBlogGrid__category_socialMedia" :
                      category.name === "Web Development" ? "fullBlogGrid__category_webDevelopment" :
                      category.name === "WordPress" ? "fullBlogGrid__category_wordpress" : ""}`} key={'category_' + i}>{category.name}</option> }
                      </>
                  ))}
              </select>
              <div className="fullBlogGrid__catRadios">
                <input id="all" name="category" type="radio" onChange={e => filterPosts(e.target.value)} value="all"/>
                <label key="category_all" for="all" className="fullBlogGrid__radio fullBlogGrid__radio_all">
                  <span>All</span>
                </label>
                {fullPosts.allWpCategory.nodes.map((category, i) => (
                    <>
                    {category.name === "Uncategorized" ? '' :
                      <input id={category.slug} name="category" type="radio" onChange={e => filterPosts(e.target.value)} value={category.slug} key={'radio_' + i}/>
                    }
                    {category.name === "Uncategorized" ? '' :
                    <label for={category.slug} key={'label_' + i} className={`fullBlogGrid__radio
                    ${category.name === "Announcements" ? "fullBlogGrid__radio_announcements" :
                    category.name === "Business" ? "fullBlogGrid__radio_business" :
                    category.name === "Design" ? "fullBlogGrid__radio_design" :
                    category.name === "Digital Marketing" ? "fullBlogGrid__radio_digitalMarketing" :
                    category.name === "General" ? "fullBlogGrid__radio_general" :
                    category.name === "Launch Updates" ? "fullBlogGrid__radio_launchUpdates" :
                    category.name === "SEO" ? "fullBlogGrid__radio_seo" :
                    category.name === "Social Media" ? "fullBlogGrid__radio_socialMedia" :
                    category.name === "Web Development" ? "fullBlogGrid__radio_webDevelopment" :
                    category.name === "WordPress" ? "fullBlogGrid__radio_wordpress" : ""}`}>
                      <span>{category.name}</span>
                    </label>}
                    </>
                ))}
              </div>
              <div className="fullBlogGrid__flex">
                {posts.map((fullPost,i) => (
                    <>
                      <div className="fullBlogGrid__post" key={'post_' + i}>
                        <span className="fullBlogGrid__post_cats">
                        {fullPost.node.categories.nodes.map((cat,i) => (
                          <>
                            <span className={`fullBlogGrid__post_cat
                              ${cat.name === "Announcements" ? "fullBlogGrid__post_cat_announcements" :
                              cat.name === "Business" ? "fullBlogGrid__post_cat_business" :
                              cat.name === "Design" ? "fullBlogGrid__post_cat_design" :
                              cat.name === "Digital Marketing" ? "fullBlogGrid__post_cat_digitalMarketing" :
                              cat.name === "General" ? "fullBlogGrid__post_cat_general" :
                              cat.name === "Launch Updates" ? "fullBlogGrid__post_cat_launchUpdates" :
                              cat.name === "SEO" ? "fullBlogGrid__post_cat_seo" :
                              cat.name === "Social Media" ? "fullBlogGrid__post_cat_socialMedia" :
                              cat.name === "Web Development" ? "fullBlogGrid__post_cat_webDevelopment" :
                              cat.name === "WordPress" ? "fullBlogGrid__post_cat_wordpress" : ""}`} key={'cat_' + i}>
                                {cat.name}
                            </span>
                          </>
                        ))}
                        </span>
                        <Link to={fullPost.node.uri}><GatsbyImage
                          className="fullBlogGrid__post_image"
                          image={fullPost.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                          alt=""
                          height="400" /></Link>
                        <div className="fullBlogGrid__post_meta">
                          <span>{fullPost.node.date}</span>
                          <span className="fullBlogGrid__post_separator">•</span>
                          <span className="fullBlogGrid__post_authorLink">{fullPost.node.author.node.name}</span>
                        </div>
                        <h2><Link to={fullPost.node.uri}>{fullPost.node.title}</Link></h2>
                        <div className="fullBlogGrid__post_excerpt" dangerouslySetInnerHTML={{__html: fullPost.node.excerpt}}></div>
                      </div>
                    </>
                  ))}
              </div>
        </div>
      </section>
  )
}

export default FullBlogGrid
