import React from 'react'
import * as styles from "./teamGrid.module.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'


const TeamGrid = data => {

  const people = useStaticQuery(graphql `
    {
      allWpTeamMember(sort: {fields: menuOrder, order: ASC}){
        nodes {
          teamMemberDetails {
            email
            phoneNumber
            title
          }
          title
          uri
          content
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 80
                    formats: [AUTO, WEBP]
                    outputPixelDensities: [1.5, 2]
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
    }

    `)


  return (
    <section className={`${styles.teamGrid} ${data.background.hasBackground ? 'component--with-background'  : ""} ${data.background.squiggleTop !== 'null' ? 'component--squiggleTop'  : ""} ${data.background.squiggleBottom !== 'null' ? 'component--squiggleBottom'  : ""}`}>
      <div className="container container--medium-2">
        <span className={`${styles.teamGrid__tag} tag`}>{data.sectionLabel}</span>
        <h2 className={styles.teamGrid__heading}>{data.heading}</h2>
        <div className={`${styles.teamGrid__grid}`}>
          <div className={`${styles.teamGrid__names}`}>
          {people.allWpTeamMember.nodes.map((teamMember,i) => (
              <div className={`${styles.teamGrid__names_single}`} key={'teamMember_' + i}>
                <div className={`${styles.teamGrid__names_line}`}></div>
                <div className={`${styles.teamGrid__names_name}`}>{teamMember.title}</div>
                <div className={`${styles.teamGrid__names_title}`}>{teamMember.teamMemberDetails.title}</div>
              </div>
          ))}
          </div>
          <div className={`${styles.teamGrid__info}`}>
          {people.allWpTeamMember.nodes.map((teamMember,i) => (
              <div className={`${styles.teamGrid__info_single}`} key={'teamMember_' + i}>
                <GatsbyImage
                  className={`${styles.teamGrid__info_image}`}
                  image={teamMember.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
                <div className={`${styles.teamGrid__info_bio}`} dangerouslySetInnerHTML={{__html:teamMember.content}}></div>
              </div>
          ))}
          </div>
        </div>
      </div>
		</section>
  )

}

export default TeamGrid
