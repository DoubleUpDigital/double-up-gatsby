import React, { useEffect, createRef } from 'react'
import lottie from "lottie-web"
import heroAnimation from "/content/assets/hero.json"

import "./full.scss"

const Full = data => {

  let animation = createRef()

  const animationData = heroAnimation

  useEffect(() => {
    if(animationData) {
      const anim = lottie.loadAnimation({
        container: animation.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
        assetsPath: '/animation-homepage-hero/',
        renderer: 'canvas',
        rendererSettings: {
          progressiveLoad: true
        }
      })

      return () => anim.destroy()
    }
  })

  return (
		<section className="heroFull">
    <div className="heroFull__background">
      <div className="heroFull__background-front"></div>
      <div className="heroFull__background-animation" ref={animation} />
    </div>

    <div className={`heroFull__content ${!data.content && 'heroFull__content--centered'}`}>
      <div className="container">
        <span className={`hero__tag tag tag--purple-filled`}>{data.title}</span>
        <div className="heroFull__cols">
          <h1 className="heroFull__title">
            {data.heading}
          </h1>
          {data.content && <div
            className={`heroFull__description margin-fix`}
            dangerouslySetInnerHTML={{ __html:data.content}}></div>}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Full
