import React from 'react'
import "./callout.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Squiggle from "../../abstracts/Squiggle"
import Lottie from "lottie-react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const Callout = data => {
  return (
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
  		<section className={`component callout
        ${data.leftWithGraphic ? "callout--leftWithGraphic" : ""}
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
  			<div className={`callout__container container ${data.leftWithGraphic ? "container--wide" : "container--small"}`}>
          <div className="callout__wrap">
    				{data.sectionLabel && <span className={`tag component__tag callout__tag`}>{data.sectionLabel}</span>}
    				<h2 className={`component__heading callout__heading`} dangerouslySetInnerHTML={{ __html:data.heading }}></h2>
    				{data.content && <div className={`component__content callout__content margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>}
    				{data.buttons && (
              <div className={`callout__buttons button-row`}>
      					{data.buttons.map((button,i) => (
      						<Link to={button.button.url} key={'button_' + i} className={`callout__buttons_button button button--inverted`}>
      							<span className="button__text">
      								{button.button.title}
      							</span>
      							<span className="button__orb">
      								<FontAwesomeIcon icon={faLongArrowRight} />
      							</span>
      						</Link>
      					))}
      				</div>
            )}
          </div>
  			</div>
        {data.leftWithGraphic && <Lottie
          className="callout__animation"
          path={data.animation.localFile.publicURL}
          renderer="svg" />}
  		</section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default Callout
