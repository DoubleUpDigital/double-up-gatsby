import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import "./iconBoxes.scss"
import Squiggle from "../../abstracts/Squiggle"

const IconBoxes = data => {
  return (
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
  		<section className={`component iconBoxes
        ${data.leftWithGraphic ? "iconBoxes--leftWithGraphic" : ""}
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
        <div className="container">
          <span className="tag">{data.tag}</span>
          <h2 className="iconBoxes__heading">{data.heading}</h2>
          <div className="iconBoxes__flex">
            {data.iconBox.map((item,i) => (
              <div className="iconBoxes__box" key={'item' + i}>
                <GatsbyImage
                className="iconBoxes__icon"
                image={item.boxIcon.localFile.childImageSharp.gatsbyImageData} />
                <span className="iconBoxes__text">{item.boxText}</span>
              </div>
            ))}
          </div>
        </div>
  		</section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default IconBoxes
