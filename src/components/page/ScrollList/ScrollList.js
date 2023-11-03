import React, { useEffect, createRef } from 'react'
import "./scrollList.scss"
import { GatsbyImage } from "gatsby-plugin-image"

import lottie from "lottie-web"

const ScrollList = data => {

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
		<section className="scrollList">
      <div
        className="scrollList__animation"
        ref={animation} />
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
                  {item.itemIcon.localFile.extension !== 'svg'
                    ? (<GatsbyImage className="scrollList__scrollListItem_icon" image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />)
                    : (<img
                        className="scrollList__scrollListItem_icon"
                        src={item.itemIcon.localFile.publicURL}
                        alt={''}
                        />)
                  }
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
