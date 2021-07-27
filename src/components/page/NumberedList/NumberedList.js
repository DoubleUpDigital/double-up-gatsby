import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./numberedList.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const NumberedList = data => {

  return (
		<section className="NumberedList">
      <StaticImage
        className="NumberedList__squiggleRight"
        src="../../../ui/squiggle-right.png"
        placeholder="tracedSVG"
        quality="100"
        alt=""
        style={{position: "absolute", objectFit: "contain", overflow: "visible"}} />
      <StaticImage
        className="NumberedList__squiggleLeft"
        src="../../../ui/squiggle-left.png"
        placeholder="tracedSVG"
        quality="100"
        alt=""
        style={{position: "absolute", objectFit: "contain", overflow: "visible"}} />
      <div className="container">
        <span className="tag NumberedList__tag">{data.tag}</span>
        <h2>{data.sectionHeading}</h2>
        <div className="NumberedList__intro">{data.content}</div>
        <div className="NumberedList__list">
        {data.numberedItems.map((item,i) => (
          <div className={`NumberedList__item ${i === 0 ? "active" : ""}`} key={'item_' + i}>
            <div className="NumberedList__title">
              <span className="NumberedList__number">{i<10 ? '0' : ''}{i+1}<span class="NumberedList__number-line"></span></span>
              <h3 className="NumberedList__heading">{item.itemHeading}</h3>
            </div>
            <div className="NumberedList__content" dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
          </div>
        ))}
      </div>

      <div className="NumberedList__accordion">
        {data.numberedItems.map((item,i) => (
          <div id={"NumberedList-" + i} className="NumberedList__accordion-item" key={'item_' + i}>
            <div className="NumberedList__accordion-title">
              <span className="NumberedList__accordion-number">{i<10 ? '0' : ''}{i+1}</span>
              <h3 className="NumberedList__accordion-heading">{item.itemHeading}</h3>
            </div>
            <div className="NumberedList__accordion-content" dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
          </div>
        ))}
        </div>
      </div>
		</section>
  )
}

export default NumberedList
