import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./VerticalScrollList.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const VerticalScrollList = data => {
  return (
		<section className={`${styles.verticalList}`}>
			<div className="container container--small">
				<span className={`${styles.verticalList__tag} tag`}>{data.tag}</span>
				<h2 className={styles.verticalList__heading}>{data.heading}</h2>
				<div className={`${styles.verticalList__content}`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
			<div className="container container--medium">
				<ul className={`${styles.verticalList__items}`}>
					{data.listItems.map((item,i) => (
						<li className={`${styles.verticalList__items_item}`} key={'listItem_' + i}>
							<span className={styles.verticalList__items_item_text}>{item.listItem}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
  )
}

export default VerticalScrollList
