import React from 'react'
import * as styles from "./jobList.module.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const JobList = data => {
  return (
		<section className={`component ${styles.jobList}`}>
			<div className="container container--small">
				<span className={`tag component__tag ${styles.jobList__tag}`}>{data.sectionLabel}</span>
				<h2 className={`component__heading ${styles.jobList__heading}`}>{data.heading}</h2>
				<div className={`component__content ${styles.jobList__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
		</section>
  )
}

export default JobList
