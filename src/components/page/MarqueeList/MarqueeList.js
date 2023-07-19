import React from 'react'
import "./marqueeList.scss"

import Squiggle from "../../abstracts/Squiggle"

const MarqueeList = data => {

  return (
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
		  <section className={`component marqueeList
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}
        ${!data.sandwichedContent ? 'not-sandwiched'  : ""}`}>

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

        {!data.sandwichedContent &&
          <div className="marqueeList__slideshow marqueeList__slideshow5">
            <div className="marqueeList__items">
              {data.listItems.map((item,i) => (
                <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
              ))}
              {data.listItems.map((item,i) => (
                <div className="marqueeList__items_item" key={'listItem_' + i}>{item.listItem}</div>
              ))}
            </div>
          </div>}

        {data.sandwichedContent &&
        <>
          <div className="marqueeList__inner">
            <div className="container container--small">
              <span className="component__tag marqueeList__tag tag animate-on-scroll">{data.tag}</span>
              <h2 className="component__heading marqueeList__heading animate-on-scroll animate-on-scroll--fade-up">{data.heading}</h2>
              <div className="component__content marqueeList__content margin-fix animate-on-scroll" dangerouslySetInnerHTML={{ __html:data.content }}></div>
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
        </>}

	    </section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default MarqueeList
