import React, { useEffect } from 'react'
import "./scrollList.scss"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Lottie from "lottie-react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const ScrollList = data => {


  return (
		<section className="scrollList">
            <Lottie
                className="scrollList__animation"
                path={data.animation.localFile.publicURL}
                renderer="svg" />
            <div className={`scrollList__container container container--wide`}>

                <div className="scrollList__content">
                    <div className="scrollList__intro">
                      <span className={`scrollList__tag tag`}>{data.sectionLabel}</span>
                      <h2 className="scrollList__heading">{data.heading}</h2>
                      <div className="scrollList__text">{data.content}</div>
                    </div>
                    <div className={`scrollList__scrollListItems card-row`}>
                        {data.scrollListItems.map((item,i) => (
                            <>
                                <div className="scrollList__scrollListItem">
                                    <GatsbyImage className="scrollList__scrollListItem_icon" image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />
                                    <div className="scrollList__scrollListItem_text">
                                        <div className="scrollList__scrollListItem_title" dangerouslySetInnerHTML={{ __html:item.itemTitle }}></div>
                                        <div className="scrollList__scrollListItem_content" dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>

	    </section>
  )
}

export default ScrollList
