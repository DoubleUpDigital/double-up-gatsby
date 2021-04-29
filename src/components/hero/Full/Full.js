import React, { useRef, useEffect, useState } from 'react'
import Lottie from "lottie-react"
import heroAnimation from "/content/assets/hero.json"

import * as styles from "./full.module.scss"

const Full = data => {

  const lottieRef = useRef()

  React.useEffect(() => {
    function handleResize() {
      //lottieRef.current.destroy()
    }
    window.addEventListener('resize', handleResize)
  })

  return (
		<section className={styles.hero}>
    <div className={styles.hero__background}>
      <div className={styles.hero__background_front}></div>
      <Lottie className={styles.hero__background_animation} animationData={heroAnimation} renderer="html" lottieRef={lottieRef} />
    </div>

    <div className={styles.hero__content}>
      <div className="container">
        <span className={`${styles.hero__tag} tag tag--purple-filled`}>{data.title}</span>
        <div className={styles.hero__cols}>
          <h1 className={styles.hero__title}>
            {data.heading}
          </h1>
          <div
            className={`${styles.hero__description} margin-fix`}
            dangerouslySetInnerHTML={{ __html:data.content}}>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Full
