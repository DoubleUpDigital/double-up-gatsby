import React, { useEffect, createRef } from 'react'
import "./callout.scss"
import { Link } from "gatsby"

import Squiggle from "../../abstracts/Squiggle"
import lottie from "lottie-web"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const Callout = data => {

  let animation = createRef()

  const animationData = data.animation?.localFile.publicURL || ''

  useEffect(() => {
    if(animationData) {
      const anim = lottie.loadAnimation({
        container: animation.current,
        path: animationData,
        loop: true,
        autoplay: false,
        renderer: 'svg',
        rendererSettings: {
          progressiveLoad: true
        }
      })

      document.addEventListener('scroll', initAnimOnEvent)
      document.addEventListener('mousemove', initAnimOnEvent)
      document.addEventListener('touchstart', initAnimOnEvent)

      function initAnimOnEvent(event) {
        initAnim()
        event.currentTarget.removeEventListener(event.type, initAnimOnEvent) // remove the event listener that got triggered
      }
      function initAnim() {
        if (anim.animDidInit) {
          return false
        }
        anim.animDidInit = true // flag to ensure script does not get added to DOM more than once.
        anim.play()
      }

      return () => anim.destroy()
    }
  })

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
    				{data.sectionLabel && <span className={`tag component__tag callout__tag animate-on-scroll
            ${data.background.hasBackground ? 'tag--purple-filled'  : ""}`}>{data.sectionLabel}</span>}
    				<h2 className={`component__heading callout__heading animate-on-scroll animate-on-scroll--fade-up`} dangerouslySetInnerHTML={{ __html:data.heading }}></h2>
    				{data.content && <div className={`component__content callout__content margin-fix animate-on-scroll`} dangerouslySetInnerHTML={{ __html:data.content }}></div>}
    				{data.buttons && (
              <div className={`callout__buttons button-row animate-on-scroll`}>
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
        {data.leftWithGraphic && <div
          className="callout__animation"
          ref={animation} />}
  		</section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default Callout
