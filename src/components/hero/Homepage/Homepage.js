import React, { useEffect, createRef } from 'react'
import lottie from "lottie-web"
import heroAnimation from "/content/assets/hero.json"

import * as styles from "./homepage.module.scss"

const Homepage = data => {

  let animation = createRef()

  const animationData = heroAnimation

  useEffect(() => {
    if(animationData) {
      lottie.loadAnimation({
        container: animation.current,
        animationData: animationData,
        loop: true,
        autoplay: false,
        renderer: 'canvas',
        rendererSettings: {
          progressiveLoad: true
        }
      })
    }
  })

  const animationOptions = {
    loop: true,
    autoplay: true,
    renderer: 'canvas',
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true
    }
  };

	return (
    <section className={styles.hero}>
      <div className={styles.hero__background}>
        <div className={styles.hero__background_front}></div>
        <div className={styles.hero__background_animation} ref={animation} />
      </div>

      <div className={styles.hero__content}>
        <div className="container">
          <h1 className={styles.hero__title}>
            {data.preHeading && <span className={styles.hero__title_preheading}>{data.preHeading}</span>}
            {data.heading}
            {data.subHeading && <span className={styles.hero__title_subheading}>{data.subHeading}</span>}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Homepage
