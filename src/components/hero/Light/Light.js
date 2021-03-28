import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./light.module.scss"

const Light = data => {
  return (
		<section className={styles.hero}>
			<div className="header-spacer"></div>
      <StaticImage 
        className={styles.hero__blob} 
        src="../../../ui/blob-top-right.png"
        placeholder="tracedSVG"
        alt="" 
        style={{position: "absolute"}} />
			<div className={styles.hero__content}>
				<div className="container">
					<span className={`${styles.hero__tag} tag`}>{data.title}</span>
				  <h1 className={styles.hero__title}>{data.heading}</h1>
					<div 
						className={`${styles.hero__description} margin-fix`} 
						dangerouslySetInnerHTML={{ __html:data.content}}>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Light