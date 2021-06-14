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
		<section className={styles.teamGrid}>
      <div className="container container--slider">
        <span className={`${styles.teamGrid__tag} tag`}>{data.sectionLabel}</span>
        <h2 className={styles.teamGrid__heading}>{data.heading}</h2>

        <div className={`${styles.teamGrid__members}`}>
        {people.allWpTeamMember.nodes.map((teamMember,i) => (
            <div className={`${styles.teamGrid__member}`} key={'teamMember_' + i}>
              <Link className={`${styles.teamGrid__member_link}`} to={teamMember.uri}>
                <GatsbyImage
                  className={`${styles.teamGrid__member_image}`}
                  image={teamMember.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
                <div className={`${styles.teamGrid__member_text}`}>
                  <div className={`${styles.teamGrid__member_name}`}>{teamMember.title}</div>
                  <div className={`${styles.teamGrid__member_title}`}>{teamMember.teamMemberDetails.title}</div>
                  <div className={`${styles.teamGrid__icon}`}><FontAwesomeIcon icon={faLongArrowRight}/></div>
                </div>
              </Link>
            </div>
        ))}

        </div>
      </div>
		</section>
  )
}

export default TeamGrid
