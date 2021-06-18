import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "./iconListExtended.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'
library.add(faCheck);

const IconListExtended = data => {
  return (
		<section className="IconListExtended sideways-heading-section light-blue-section">
            <div className="container container--medium-2">
              <div className="IconListExtended__top">
                <span className="IconListExtended__tag tag">{data.tag}</span>
                <h2>{data.heading}</h2>
                <div>{data.content}</div>
              </div>
              <div className="IconListExtended__list">
                  {data.listItems.map((item,i) => (
                      <div className="IconListExtended__list-item" key={'listItem_' + i}>
                          <span className="IconListExtended__list-icon">
                              <FontAwesomeIcon icon={faCheckCircle} />
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
