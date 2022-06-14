import React, { useState, useEffect } from 'react'
import * as styles from "./fullBlogGrid.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const BlogFilter = styled.label`
display: inline-block;
font-size: 13px;
font-weight: 700;
text-transform: uppercase;
cursor: pointer;
padding: 0 10px;
border: 2px solid transparent;
border-radius: 5px;
transition: .2s ease;

&:hover {
  border-color: ${props => props.color};
  color: ${props => props.color};
}
`

const BlogFilterRadio = styled.input`
display: none;

&:checked + ${BlogFilter} {
  border-color: ${props => props.color};
  color: ${props => props.color};
}
`

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
                      transformOptions: {cropFocus: CENTER}
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
                categoryOptions {
                  color
                }
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
      allWpCategory(filter: {name: {nin: "Uncategorized"}}) {
        nodes {
          name
          slug
          categoryOptions {
            color
          }
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
                        transformOptions: {cropFocus: CENTER}
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


  const [visible, setVisible] = useState(12);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 12);
  }

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
    <section className="fullBlogGrid">

      <div className="container container--wide">
        <h3>{data.fullBlogTitle}</h3>
        <select onChange={e => filterPosts(e.target.value)} value={selected} className="fullBlogGrid__catRow">
          <option key={'category_all'} value="all" className="fullBlogGrid__category">All</option>
          {fullPosts.allWpCategory.nodes.map((category, i) => (
            <>
              <option
                value={category.slug}
                className={`fullBlogGrid__category`}
                key={'category_' + i}>
                {category.name}
              </option>
            </>
          ))}
        </select>
        <div className="fullBlogGrid__catRadios">
          <div className="fullBlogGrid__filter">
            <BlogFilterRadio id="all" name="category" type="radio" onChange={e => filterPosts(e.target.value)} value="all" className="fullBlogGrid__radio" />
            <BlogFilter key="category_all" for="all">
              All
            </BlogFilter>
          </div>
          {fullPosts.allWpCategory.nodes.map((category, i) => (
            <div className="fullBlogGrid__filter" key={'filter_' + i}>
              <BlogFilterRadio
                id={'radio-' + category.slug}
                name="category"
                type="radio"
                value={category.slug}
                onChange={e => filterPosts(e.target.value)}
                color={category.categoryOptions.color} />
              <BlogFilter
                for={'radio-' + category.slug}
                color={category.categoryOptions.color}>
                {category.name}
              </BlogFilter>
            </div>
          ))}
        </div>
        <div className="fullBlogGrid__flex">
        {posts.slice(0, visible).map((fullPost,i) => (
          <>
            <Link to={fullPost.node.uri} className="fullBlogGrid__post" key={'post_' + i}>
              <GatsbyImage
                className="fullBlogGrid__post_image"
                image={fullPost.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                alt=""
                height="400" />
              <div className="fullBlogGrid__post_cats">
                {fullPost.node.categories.nodes.map((cat,i) => (
                  <span className={`tag tag--small fullBlogGrid__post_cat`} key={'cat_' + i} style={{
                    color: cat.categoryOptions.color,
                    background: hexToRGB(cat.categoryOptions.color, .1)
                  }}>
                    {cat.name}
                  </span>
                ))}
              </div>
              <div className="fullBlogGrid__post_meta">
                <span>{fullPost.node.date}</span>
                <span className="fullBlogGrid__post_separator">•</span>
                <span className="fullBlogGrid__post_authorLink">{fullPost.node.author.node.name}</span>
              </div>
              <h2 className="fullBlogGrid__post_title">{fullPost.node.title}</h2>
              <div className="fullBlogGrid__post_excerpt" dangerouslySetInnerHTML={{__html: fullPost.node.excerpt}}></div>
            </Link>
          </>
        ))}
        </div>
        <button onClick={showMore} class="fullBlogGrid__load_more">Load More</button>
      </div>
    </section>
  )
}

export default FullBlogGrid
