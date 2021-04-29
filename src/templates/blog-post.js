import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import * as styles from "./blog-post.module.scss"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
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
            <h1 itemProp="headline" className={styles.blogPost__title}>{parse(post.title)}</h1>
            <div className={styles.blogPost__meta}>
              <span className={styles.blogPost__meta_date}>
                {post.date}
              </span>
            </div>
          </div>
          <div className="container container--wide">
            {featuredImage?.gatsbyImageData && (
              <GatsbyImage
                  className={`${styles.blogPost__banner}`}
                  image={featuredImage.gatsbyImageData}
                  alt={featuredImage.alt}
                  style={{ marginTop: 50, marginBottom: 80, borderRadius: 10 }} />
            )}
          </div>
        </section>

        {!!post.content && (
          <section itemProp="articleBody">
            <div className="container">
              <div className={`${styles.blogPost__content} margin-fix`}>
                {parse(post.content)}
              </div>
            </div>
          </section>
        )}

        <hr />

        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
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
      seo {
				title
				metaDesc
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
                outputPixelDensities: 2
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
  }
`
