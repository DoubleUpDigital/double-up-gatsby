import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "./iconList.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const IconList = data => {
  return (
		<section className="iconList">
      <div className="iconList__flex container">
        <div class="iconList__textHalf">
          <span className="iconList__tag tag">{data.sectionLabel}</span>
          <h2 className="iconList__heading">{data.heading}</h2>
          <div className="iconList__content margin-fix" dangerouslySetInnerHTML={{ __html:data.content }}></div>
        </div>
        <ul className="iconList__items">
          {data.listItems.map((item,i) => (
            <li className="iconList__items_item" key={'listItem_' + i}>
              <GatsbyImage
                className="iconList__items_item_icon"
                image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />
              <span className="iconList__items_item_text">{item.itemText}</span>
            </li>
          ))}
        </ul>
      </div>
		</section>
  )
}

export default IconList
