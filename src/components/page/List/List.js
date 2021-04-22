import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./list.module.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const List = data => {
  return (
		<section className={styles.list}>
			<div className="container container--small">
				<span className={`${styles.list__tag} tag`}>{data.sectionLabel}</span>
				<h2 className={styles.list__heading}>{data.heading}</h2>
				<div className={`${styles.list__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
				<div className={`${styles.list__items}`}>
					{data.listItems.map((item,i) => (
						<span>{item.text}</span>
					))}
				</div>
			</div>
		</section>
  )
}

export default List