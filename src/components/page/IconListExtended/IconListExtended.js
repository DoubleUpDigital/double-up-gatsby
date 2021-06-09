import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "./iconListExtended.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const IconListExtended = data => {
  return (
		<section className="IconListExtended sideways-heading-section light-blue-section">
            <div className="container container--medium-2">
            <h2 class="sideways-heading">{data.heading}</h2>
            <div className="IconListExtended__list sideways-heading-content">
                {data.listItems.map((item,i) => (
                    <div className="IconListExtended__list-item" key={'listItem_' + i}>
                        <span className="IconListExtended__list-icon">
                            <GatsbyImage image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />
                        </span>
                        <span className="IconListExtended__list-text" dangerouslySetInnerHTML={{__html:item.itemText}}></span>
                    </div>
                ))}
            </div>
            </div>
		</section>
  )
}

export default IconListExtended
