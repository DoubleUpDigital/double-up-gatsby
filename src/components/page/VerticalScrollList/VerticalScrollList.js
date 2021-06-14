import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./verticalScrollList.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

// const Chunk = data => {
//
// }

const VerticalScrollList = data => {

  // const chunkSize = 4;
  // const arr = {data.listItems.map((item) => (
  //   {item.listItem}
  // ))}
  // const groups = arr.map((e, i) => {
  //      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
  // }).filter(e => { return e; });
  // console.log({arr, groups})

  return (
		<section className="verticalList">
      <div className="verticalList__slideshow verticalList__slideshow1">
        <div className="verticalList__items">
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
        </div>
      </div>
      <div className="verticalList__slideshow verticalList__slideshow2">
        <div className="verticalList__items">
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
        </div>
      </div>
			<div className="verticalList__content">
        <div className="container container--small">
          <span className="verticalList__tag tag">{data.tag}</span>
          <h2 className="verticalList__heading">{data.heading}</h2>
          <div className="verticalList__content" dangerouslySetInnerHTML={{ __html:data.content }}></div>
        </div>
      </div>
      <div className="verticalList__slideshow verticalList__slideshow3">
        <div className="verticalList__items">
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
        </div>
      </div>
      <div className="verticalList__slideshow verticalList__slideshow4">
        <div className="verticalList__items">
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
          {data.listItems.map((item,i) => (
            <div className="verticalList__items_item" key={'listItem_' + i}>{item.listItem}</div>
          ))}
        </div>
      </div>
      <StaticImage
        className="verticalList__squiggle"
        src="../../../ui/light-blue-squiggle-bottom.png"
        placeholder="tracedSVG"
        quality="100"
        alt=""
        style={{position: "absolute"}} />
		</section>
  )
}

export default VerticalScrollList