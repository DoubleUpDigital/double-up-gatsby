import React from 'react'
import "./teamGrid.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
import { faPlus } from '@fortawesome/pro-regular-svg-icons'
import { faMinus } from '@fortawesome/pro-regular-svg-icons'


const TeamGrid = data => {

  const people = data.teamMembers

  return (
    <section className={`component teamGrid
      ${data.background.hasBackground ? 'component--with-background'  : ""}
      ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
      ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
      ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
      <div className="container container--medium-2">
        <span className="teamGrid__tag tag">{data.sectionLabel}</span>
        <h2 className="teamGrid__heading">{data.heading}</h2>
        <div className="teamGrid__grid">
          <div className="teamGrid__names">
          {people.map((teamMember,i) => (
            <div className={`teamGrid__names_single toggle ${teamMember.slug} ${i === 0 ? "active" : ""}`} key={'teamMember_' + i} data-member={teamMember.slug}>
              <div className="teamGrid__names_line"></div>
              <div className="teamGrid__names_name">{teamMember.title}</div>
              <div className="teamGrid__names_title">{teamMember.teamMemberDetails.title}</div>
            </div>
          ))}
          </div>
          <div className="teamGrid__info">
          {people.map((teamMember,i) => (
            <div className={`teamGrid__info_single toggle-content ${teamMember.slug} ${i === 0 ? "active" : ""}`} key={'teamMember_' + i}>
              <GatsbyImage
                className="teamGrid__info_image"
                image={teamMember.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
              <div className="teamGrid__info_bio" dangerouslySetInnerHTML={{__html:teamMember.content}}></div>
            </div>
          ))}
          </div>
        </div>

        <div className="teamGrid__accordion">
          {people.map((teamMember,i) => (
            <div className="teamGrid__accordion-item" key={'teamMember_' + i}>
              <div className={`teamGrid__accordion-title ${teamMember.slug} ${i === 0 ? "active" : ""}`}>
                <div className="teamGrid__names_name">{teamMember.title}</div>
                <div className="teamGrid__names_title">{teamMember.teamMemberDetails.title}</div>
              </div>
              <div className={`teamGrid__accordion-content ${teamMember.slug} ${i === 0 ? "active" : ""}`}>
                <GatsbyImage
                  className="teamGrid__info_image"
                  image={teamMember.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
                <div className="teamGrid__info_bio" dangerouslySetInnerHTML={{__html:teamMember.content}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
		</section>
  )

}

export default TeamGrid
