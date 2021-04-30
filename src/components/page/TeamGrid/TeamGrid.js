import React from 'react'
import * as styles from "./teamGrid.module.scss"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const TeamGrid = data => {
  return (
		<section className={styles.teamGrid}>
            <div className="container container--slider">
                <span className={`${styles.teamGrid__tag} tag`}>{data.sectionLabel}</span>
                <h2 className={styles.teamGrid__heading}>{data.heading}</h2>

                <div className={`${styles.teamGrid__members}`}>
                <StaticQuery
                    query={graphql`
                      {
                        allWpTeamMember {
                          nodes {
                            teamMemberDetails {
                              email
                              phoneNumber
                              title
                            }
                            title
                          }
                        }
                      }
                    `}
                    render={data => (
                        <>
                            {data.allWpTeamMember.nodes.map((teamMember,i) => (
                                <div>{teamMember.title}</div>
                            ))}
                        </>
                    )}
                ></StaticQuery>
                </div>
            </div>
		</section>
  )
}

export default TeamGrid
