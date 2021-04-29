import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./list.module.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const List = data => {
  return (
		<section className={`${styles.list} ${data.spaceBackground ? styles.listSpace  : ""}`}>
			{data.spaceBackground && <StaticImage
				className={styles.list__background}
				src="../../../ui/blob-full-1.png"
				placeholder="tracedSVG"
				quality="100"
				alt=""
				style={{position: "absolute"}} />}
			<div className="container container--small">
				<span className={`${styles.list__tag} tag ${data.spaceBackground ? "tag--purple-filled"  : ""}`}>{data.sectionLabel}</span>
				<h2 className={styles.list__heading}>{data.heading}</h2>
				<div className={`${styles.list__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
			<div className="container container--medium">
				<ul className={`${styles.list__items}`}>
					{data.listItems.map((item,i) => (
						<li className={`${styles.list__items_item}`} key={'listItem_' + i}>
							<span className={styles.list__items_item_icon}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={styles.list__items_item_text}>{item.text}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
  )
}

export default List
