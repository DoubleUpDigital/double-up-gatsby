import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import "./iconList.scss"

const IconList = data => {
  return (
		<section className="iconList">
      <div className="iconList__flex container">
        <div class="iconList__textHalf">
          <span className="iconList__tag tag animate-on-scroll">{data.sectionLabel}</span>
          <h2 className="iconList__heading animate-on-scroll animate-on-scroll--fade-up">{data.heading}</h2>
          <div className="iconList__content margin-fix animate-on-scroll" dangerouslySetInnerHTML={{ __html:data.content }}></div>
        </div>
        <ul className="iconList__items">
          {data.listItems.map((item,i) => (
            <li className="iconList__items_item animate-on-scroll" key={'listItem_' + i}>
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
