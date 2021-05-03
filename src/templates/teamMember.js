import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Logo from "../components/logo"
import Navigation from "../components/navigation"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "../components/hero/Light/light.module.scss"
import * as teamStyles from "./team-member.module.scss"

const TeamMemberTemplate = ({ data: { post } }, data) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (


    <Layout>

        <section className={styles.hero}>
            <div className="header-spacer"></div>
            <StaticImage
                className={styles.hero__blob}
                src="../../../ui/blob-top-right.png"
                placeholder="tracedSVG"
                quality="100"
                alt=""
                style={{position: "absolute"}} />
            <div className={`${teamStyles.teamMemberHero}`}>
                <div className="container">
                    <span className={`${styles.hero__tag} tag`} dangerouslySetInnerHTML={{ __html:`About Us`}}></span>
                    <h1 className={`${teamStyles.h1}`} itemProp="headline">{parse(post.title)}</h1>
                </div>
            </div>
        </section>

      <SEO title={post.title} description={post.excerpt} />

        <article
            className={`${teamStyles.teamMemberSingle__content}`}
            itemScope
            itemType="http://schema.org/Article">

            <div class="container">
                <div className={`${teamStyles.teamMemberSingle__flex}`}>
                    <GatsbyImage
                        image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                        className={`${teamStyles.teamMemberSingle__headshot}`}
                    />

                    <div className={`${teamStyles.teamMemberSingle__bio}`}>
                        <h3 dangerouslySetInnerHTML={{__html:post.teamMemberDetails.title}}></h3>
                        {!!post.content && (
                            <section itemProp="articleBody">{parse(post.content)}</section>
                        )}
                    </div>
                </div>
                <div className={`${teamStyles.teamMemberSingle__contact}`}>
                    {!!post.teamMemberDetails.phoneNumber && (
                        <a className={`${teamStyles.teamMemberSingle__contact_phone}`} href={`tel:${post.teamMemberDetails.phoneNumber}`}>
                            {post.teamMemberDetails.phoneNumber}
                        </a>
                    )}

                    {!!post.teamMemberDetails.email && (
                        <a className={`${teamStyles.teamMemberSingle__contact_email}`} href={`mailto:${post.teamMemberDetails.email}`}>
                            {post.teamMemberDetails.email}
                        </a>
                    )}
                </div>
            </div>
        </article>

    </Layout>
  )
}

export default TeamMemberTemplate

export const pageQuery = graphql`
  query TeamMemberById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpTeamMember(id: { eq: $id }) {
      content
      title
      teamMemberDetails {
          email
          phoneNumber
          title
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
                    width: 231
                    height: 231
                    transformOptions: {cropFocus: ATTENTION}
                )
            }
          }
        }
      }
    }
  }
`
