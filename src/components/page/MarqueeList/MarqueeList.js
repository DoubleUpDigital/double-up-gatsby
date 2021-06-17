import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./marqueeList.scss"
import { Link } from "gatsby"

import SquiggleTop1 from '../../abstracts/squiggle-top-1'
import SquiggleTop2 from '../../abstracts/squiggle-top-2'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

// const Chunk = data => {
//
// }

const MarqueeList = data => {

  // const chunkSize = 4;
  // const arr = {data.listItems.map((item) => (
  //   {item.listItem}
  // ))}
  // const groups = arr.map((e, i) => {
  //      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
  // }).filter(e => { return e; });
  // console.log({arr, groups})

  return (
    <>
      <SquiggleTop2/>
		  <section className="marqueeList">
        <div className="marqueeList__slideshow marqueeList__slideshow1">
          <div className="marqueeList__items">
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
          </div>
        </div>
        <div className="marqueeList__slideshow marqueeList__slideshow2">
          <div className="marqueeList__items">
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
          </div>
        </div>
        <div className="marqueeList__inner">
          <div className="container container--small">
            <span className="component__tag marqueeList__tag tag">{data.tag}</span>
            <h2 className="component__heading marqueeList__heading">{data.heading}</h2>
            <div className="component__content marqueeList__content margin-fix" dangerouslySetInnerHTML={{ __html:data.content }}></div>
          </div>
        </div>
        <div className="marqueeList__slideshow marqueeList__slideshow3">
          <div className="marqueeList__items">
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
          </div>
        </div>
        <div className="marqueeList__slideshow marqueeList__slideshow4">
          <div className="marqueeList__items">
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
            {data.listItems.map((item,i) => (
              <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
            ))}
          </div>
        </div>
	    </section>
    </>
  )
}

export default MarqueeList
