import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./callout.module.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const Callout = data => {
  return (
		<section className={styles.callout}>
			<div className="container container--small">
				<span className={`${styles.callout__tag} tag`}>{data.sectionLabel}</span>
				<h2 className={styles.callout__heading}>{data.heading}</h2>
				<div className={`${styles.callout__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
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
		</section>
  )
}

export default Callout