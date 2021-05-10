import React from 'react'
import * as styles from "./callout.module.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const SubscribeBar = data => {
  return (
		<section className={`component ${styles.subscribeBar}`}>
			<div className="container container--small">
				{data.sectionLabel && <span className={`tag component__tag ${styles.callout__tag}`}>{data.sectionLabel}</span>}
				<h2 className={`component__heading ${styles.callout__heading}`}>{data.heading}</h2>
			</div>
		</section>
  )
}

export default SubscribeBar
