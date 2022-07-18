import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "./teamMember.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow1 from "/src/ui/arrow-1.svg"
import Arrow2 from "/src/ui/arrow-2.svg"
import Arrow3 from "/src/ui/arrow-3.svg"
import Arrow4 from "/src/ui/arrow-4.svg"

const TeamMemberTemplate = ({ data: { post } }) => {

  return (
    <Layout>
      <SEO title={post.seo.title} description={post.seo.metaDesc} />

      <section className="teamHero">
        <div className="container">
          <h1 className="teamHero__heading">Say hello to our {post.teamMemberDetails.title}, <span className="teamHero__heading-highlight">{post.title}</span></h1>
        </div>
      </section>
      <section className="teamPhoto">
        <div className="container container--wide">
          <div className="teamPhoto__cols">
            <div className="teamPhoto__cols-notes">
              <div className="teamPhoto__duty">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[0].item}}></span>
                <div className="teamPhoto__duty-arrow">
                  <img src={Arrow1} />
                </div>
              </div>
              <div className="teamPhoto__duty">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[1].item}}></span>
                <div className="teamPhoto__duty-arrow">
                  <img src={Arrow2} />
                </div>
              </div>
            </div>
            <div className="teamPhoto__cols-photo">
              <GatsbyImage
                image={post.teamMemberDetails.beans.singleImage.gatsbyImage}
                alt={post.title}
                />
            </div>
            <div className="teamPhoto__cols-notes">
              <div className="teamPhoto__duty teamPhoto__duty--reverse">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[2].item}}></span>
                <div className="teamPhoto__duty-arrow" style="margin-left: -5%;">
                  <img src={Arrow3} />
                </div>
              </div>
              <div className="teamPhoto__duty teamPhoto__duty--reverse">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[3].item}}></span>
                <div className="teamPhoto__duty-arrow">
                  <img src={Arrow4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      id
      title
      content
      seo {
        title
        metaDesc
      }
      teamMemberDetails {
        firstName
        title
        beans {
          type
          singleImage {
            gatsbyImage(
              width: 444
              quality: 80
              outputPixelDensities: [1.5, 2]
              formats: [AUTO, WEBP]
              fit: CONTAIN
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
        duties {
          item
        }
        superlative
        favorites {
          cardGame
          disneyMovie
          food
          iceCream
          place
          season
        }
        spotifyEmbed
      }
    }
  }
`
