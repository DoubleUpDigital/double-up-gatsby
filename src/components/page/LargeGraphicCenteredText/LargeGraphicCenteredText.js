import React from 'react'
import "./largeGraphicCenteredText.scss"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Lottie from "lottie-react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

import Squiggle from "../../abstracts/Squiggle"

const LargeGraphicCenteredText = data => {
  return (
    <>
    {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
    <section className={`component LargeGraphicCenteredText
      ${data.background.hasBackground ? 'component--with-background'  : ""}
      ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
      ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
      ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
      <div className="LargeGraphicCenteredText__inner">
        <div className="container container--medium-2">
          {data.animation && <Lottie
            className="LargeGraphicCenteredText__animation"
            path={data.animation.localFile.publicURL}
            renderer="svg" />}
          {data.tag && <span className="tag component__tag LargeGraphicCenteredText__tag">{data.tag}</span>}
          <h2>{data.heading}</h2>
          <div className="LargeGraphicCenteredText__content" dangerouslySetInnerHTML={{ __html:data.content }}></div>
        </div>
      </div>
    </section>
    {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default LargeGraphicCenteredText
