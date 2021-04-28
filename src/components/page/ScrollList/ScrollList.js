import React from 'react'
import * as styles from "./scrollList.module.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const ScrollList = data => {
  return (
		<section className={styles.scrollList}>
			<div className="container">

				<div>
                    <span className={`${styles.scrollList__tag} tag`}>{data.sectionLabel}</span>
                    <h2 className={styles.scrollList__heading}>{data.heading}</h2>
                    <Link to={data.button.url} className={`${styles.scrollList__button} button button--simple`}>{data.button.title}</Link>
                </div>

                <div className={`${styles.scrollList__listItems} card-row`}>
					{data.listItems.map((item,i) => (
                        <>
                            <div className={`${styles.scrollList__listItems_item}`}>
                                <GatsbyImage className={`${styles.scrollList__listItems_icon}`} image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />
                                <div className={`${styles.scrollList__listItems_title}`}>{item.itemTitle}</div>
                                <div className={`${styles.scrollList__listItems_content}`}>{item.itemContent}</div>
                            </div>
                        </>
					))}
				</div>
            </div>

		</section>
  )
}

export default ScrollList
