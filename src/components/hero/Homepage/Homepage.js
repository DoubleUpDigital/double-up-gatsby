import React, { useEffect, createRef } from 'react'
import lottie from "lottie-web"
import heroAnimation from "/content/assets/hero.json"

import * as styles from "./homepage.module.scss"

const Homepage = data => {

  let animation = createRef()

  const animationData = heroAnimation

  useEffect(() => {
    if(animationData) {
      const anim = lottie.loadAnimation({
        container: animation.current,
        animationData: animationData,
        loop: true,
        autoplay: false,
        assetsPath: '/animation-homepage-hero/',
        renderer: 'canvas',
        rendererSettings: {
          progressiveLoad: true,
          preserveAspectRatio: 'xMidYMid slice'
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
    <section className={styles.hero}>
      <div className={styles.hero__background}>
        <div className={styles.hero__background_front}></div>
        <div className={`${styles.hero__background_animation} animate-on-scroll`} ref={animation} />
      </div>

      <div className={styles.hero__content}>
        <div className="container">
          <h1 className={`${styles.hero__title}`}>
            {data.preHeading && <span className={`${styles.hero__title_preheading} animate-on-scroll`}>{data.preHeading}</span>}
            {data.heading && <span className={`${styles.hero__title_heading} animate-on-scroll animate-on-scroll--fade-up`}>{data.heading}</span>}
            {data.subHeading && <span className={`${styles.hero__title_subheading} animate-on-scroll`}>{data.subHeading}</span>}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Homepage
