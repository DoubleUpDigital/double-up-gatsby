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
import Squiggle from "/src/ui/flat-light-blue-squiggle-top.svg"

import {
  faLocationSmile,
  faBowlFood,
  faGameBoard,
  faFilm, faLeafMaple,
  faBowlScoops
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeamMemberTemplate = ({ data: { post } }) => {

  return (
    <Layout>
      <SEO
        title={post.seo.title}
        description={post.seo.metaDesc}
        imageURL={post.seo.opengraphImage.localFile.publicURL}
        index={post.seo.metaRobotsNoindex}
        follow={post.seo.metaRobotsNofollow} />

      <section className="teamHero">
        <div className="container">
          <h1 className="teamHero__heading">Say hello to our {post.teamMemberDetails.title}, <span className="teamHero__heading-highlight">{post.title}</span></h1>
        </div>
      </section>
      <section className="teamPhoto">
        <img src={Squiggle} className="teamPhoto__squiggle" alt="" />
        <div className="container container--wide">
          <div className="teamPhoto__cols">
            <div className="teamPhoto__cols-notes">
              <div className="teamPhoto__duty">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[0].item}}></span>
                <div className="teamPhoto__duty-arrow">
                  <img src={Arrow1} alt="" />
                </div>
              </div>
              <div className="teamPhoto__duty">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[1].item}}></span>
                <div className="teamPhoto__duty-arrow">
                  <img src={Arrow2} alt="" />
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
                  <img src={Arrow3} alt="" />
                </div>
              </div>
              <div className="teamPhoto__duty teamPhoto__duty--reverse">
                <span className="teamPhoto__duty-label" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.duties[3].item}}></span>
                <div className="teamPhoto__duty-arrow">
                  <img src={Arrow4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="component component--with-background teamBio">
        <div className="container">
          <h2 className="teamBio__heading">About</h2>
          <div className="teamBio__bio margin-fix" dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      </section>
      <section className="component component--with-background component--last teamFavs">
        <div className="container">
          <span className="component__tag teamFavs__tag tag tag--purple-filled">Office Superlative</span>
          <h2 className="component__heading teamFavs__heading">{post.teamMemberDetails.superlative}</h2>
          <div class="teamFavs__grid">
            <div className="teamFavs__grid-item">
              <div className="teamFavs__grid-item-icon-wrap teamFavs__grid-item-icon-wrap--red">
                <FontAwesomeIcon icon={faBowlFood} className="teamFavs__grid-item-icon" />
              </div>
              <span className="teamFavs__grid-item-label">Favorite Food</span>
              <span className="teamFavs__grid-item-value">{post.teamMemberDetails.favorites.food}</span>
            </div>
            <div className="teamFavs__grid-item">
              <div className="teamFavs__grid-item-icon-wrap teamFavs__grid-item-icon-wrap--yellow">
                <FontAwesomeIcon icon={faGameBoard} className="teamFavs__grid-item-icon" />
              </div>
              <span className="teamFavs__grid-item-label">Favorite Card or Board Game</span>
              <span className="teamFavs__grid-item-value">{post.teamMemberDetails.favorites.cardGame}</span>
            </div>
            <div className="teamFavs__grid-item">
              <div className="teamFavs__grid-item-icon-wrap teamFavs__grid-item-icon-wrap--blue">
                <FontAwesomeIcon icon={faFilm} className="teamFavs__grid-item-icon" />
              </div>
              <span className="teamFavs__grid-item-label">Favorite Disney Movie</span>
              <span className="teamFavs__grid-item-value">{post.teamMemberDetails.favorites.disneyMovie}</span>
            </div>
            <div className="teamFavs__grid-item">
              <div className="teamFavs__grid-item-icon-wrap teamFavs__grid-item-icon-wrap--purple">
                <FontAwesomeIcon icon={faLeafMaple} className="teamFavs__grid-item-icon" />
              </div>
              <span className="teamFavs__grid-item-label">Favorite Season</span>
              <span className="teamFavs__grid-item-value">{post.teamMemberDetails.favorites.season}</span>
            </div>
            <div className="teamFavs__grid-item">
              <div className="teamFavs__grid-item-icon-wrap teamFavs__grid-item-icon-wrap--red">
                <FontAwesomeIcon icon={faBowlScoops} className="teamFavs__grid-item-icon" />
              </div>
              <span className="teamFavs__grid-item-label">Favorite Ice Cream Flavor</span>
              <span className="teamFavs__grid-item-value">{post.teamMemberDetails.favorites.iceCream}</span>
            </div>
            <div className="teamFavs__grid-item">
              <div className="teamFavs__grid-item-icon-wrap teamFavs__grid-item-icon-wrap--yellow">
                <FontAwesomeIcon icon={faLocationSmile} className="teamFavs__grid-item-icon" />
              </div>
              <span className="teamFavs__grid-item-label">Favorite Place</span>
              <span className="teamFavs__grid-item-value">{post.teamMemberDetails.favorites.place}</span>
            </div>
          </div>
          <div className="teamFavs__song">
            <span className="teamFavs__song-label">Jam out to {post.teamMemberDetails.firstName}'s (current) favorite song:</span>
            <div className="teamFavs__song-embed" dangerouslySetInnerHTML={{__html: post.teamMemberDetails.spotifyEmbed}}></div>
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
        opengraphImage {
          localFile {
            publicURL
          }
        }
        metaRobotsNoindex
        metaRobotsNofollow
      }
      featuredImage {
        node {
          publicUrl
        }
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
