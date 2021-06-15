import React, { useRef, useEffect, useState } from 'react'
import Lottie from "lottie-react"
import heroAnimation from "/content/assets/hero.json"

import "./full.scss"

const Full = data => {

  const lottieRef = useRef()

  React.useEffect(() => {
    function handleResize() {
      //lottieRef.current.destroy()
    }
    window.addEventListener('resize', handleResize)
  })

  return (
		<section className="heroFull">
    <div className="heroFull__background">
      <div className="heroFull__background-front"></div>
      <Lottie className="heroFull__background-animation" animationData={heroAnimation} renderer="html" lottieRef={lottieRef} />
    </div>

    <div className={`heroFull__content ${!data.content && 'heroFull__content--centered'}`}>
      <div className="container">
        <span className={`hero__tag tag tag--purple-filled`}>{data.title}</span>
        <div className="heroFull__cols">
          <h1 className="heroFull__title">
            {data.heading}
          </h1>
          {data.content && <div
            className={`hero__description margin-fix`}
            dangerouslySetInnerHTML={{ __html:data.content}}></div>}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Full
