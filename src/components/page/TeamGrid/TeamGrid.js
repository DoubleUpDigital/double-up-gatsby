import React from 'react'
import "./teamGrid.scss"

import TeamTile from "../../abstracts/TeamTile"

const TeamGrid = data => {

  const people = data.teamMembers

  return (
    <section className={`component teamGrid
      ${data.background.hasBackground ? 'component--with-background'  : ""}
      ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
      ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
      ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
      <div className="container">
        {data.sectionLabel && <span className="component__tag teamGrid__tag tag">{data.sectionLabel}</span>}
        {data.heading && <h2 className="component__heading teamGrid__heading">{data.heading}</h2>}
        <div className="teamGrid__grid">
          {people.map(person => (
            <TeamTile person={person} key={person.id} />
          ))}
        </div>
      </div>
		</section>
  )

}

export default TeamGrid
