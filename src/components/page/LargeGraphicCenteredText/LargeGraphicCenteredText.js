import React, { useEffect, createRef } from 'react'
import "./largeGraphicCenteredText.scss"
import lottie from "lottie-web"

import Squiggle from "../../abstracts/Squiggle"

const LargeGraphicCenteredText = data => {

  let animation = createRef()

  const animationData = data.animation?.localFile.publicURL || ''

  useEffect(() => {
    if(animationData) {
      const anim = lottie.loadAnimation({
        container: animation.current,
        path: animationData,
        loop: true,
        autoplay: true,
        renderer: 'svg',
        rendererSettings: {
          progressiveLoad: true
        }
      })

      return () => anim.destroy()
    }
  })

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
          {data.animation && <div
            className="LargeGraphicCenteredText__animation"
            ref={animation} />}
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
