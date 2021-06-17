import React from 'react'
import * as styles from "./callout.module.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const Callout = data => {
  return (
		<section className={`component ${styles.callout} ${data.leftWithGraphic ? styles.callout__leftWithGraphic : ""}`}>
			<div className={`${styles.callout__container} container container--small`}>
				{data.sectionLabel && <span className={`tag component__tag ${styles.callout__tag}`}>{data.sectionLabel}</span>}
				<h2 className={`component__heading ${styles.callout__heading}`} dangerouslySetInnerHTML={{ __html:data.heading }}></h2>
				{data.content && <div className={`component__content ${styles.callout__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>}
				<div className={`${styles.callout__buttons} button-row`}>
					{data.buttons.map((button,i) => (
						<Link to={button.button.url} key={'button_' + i} className={`${styles.callout__buttons_button} button button--inverted`}>
							<span className="button__text">
								{button.button.title}
							</span>
							<span className="button__orb">
								<FontAwesomeIcon icon={faLongArrowRight} />
							</span>
						</Link>
					))}
				</div>
			</div>
      {data.leftWithGraphic && <div className={`${styles.callout__graphic}`}>
        <GatsbyImage
          image={data.graphic.localFile.childImageSharp.gatsbyImageData}
          alt={data.graphic.altText} />
        </div>}
		</section>
  )
}

export default Callout
