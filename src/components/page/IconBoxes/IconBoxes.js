import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "./iconBoxes.scss"
import { Link } from "gatsby"

const IconBoxes = data => {
  return (
		<section className="iconBoxes">
      <div className="container">
        <span className={`${styles.iconList__tag} tag`}>{data.tag}</span>
        <h2>{data.heading}</h2>
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
  )
}

export default IconBoxes
