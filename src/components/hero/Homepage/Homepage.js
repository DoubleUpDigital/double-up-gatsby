import React from 'react'
import Lottie from "lottie-react"
import heroAnimation from "/content/assets/hero.json"

import * as styles from "./homepage.module.scss"

const Homepage = data => {
	return (
    <section className={styles.hero}>
      <div className={styles.hero__background}>
        <div className={styles.hero__background_front}></div>
        <Lottie animationData={heroAnimation} />
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