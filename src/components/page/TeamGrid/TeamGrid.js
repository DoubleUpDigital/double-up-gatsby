import React from 'react'
import "./teamGrid.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const TeamGrid = data => {

  const people = data.teamMembers

  return (
    <section className={`component teamGrid
      ${data.background.hasBackground ? 'component--with-background'  : ""}
      ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
      ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
      ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
      <div className="container">
        <span className="component__tag teamGrid__tag tag">{data.sectionLabel}</span>
        <h2 className="component__heading teamGrid__heading">{data.heading}</h2>
        <div className="teamGrid__grid">
          {people.map(person => (
            <Link className="teamGrid__gridItem" key={person.id} to={person.uri}>
              <div className="teamGrid__gridItem-image">
                <GatsbyImage
                  image={person.teamMemberDetails.beans.archiveImage.gatsbyImage}
                  alt={person.title}
                  />
              </div>
              <div className="teamGrid__gridItem-text">
                <h3 className="teamGrid__gridItem-heading">{person.title}</h3>
                <span className="teamGrid__gridItem-title">{person.teamMemberDetails.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
		</section>
  )

}

export default TeamGrid
