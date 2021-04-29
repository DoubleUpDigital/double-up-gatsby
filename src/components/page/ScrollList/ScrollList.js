import React from 'react'
import * as styles from "./scrollList.module.scss"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const ScrollList = data => {
  return (
		<section className={`${styles.scrollList} ${data.spaceBackground ? styles.scrollListSpace  : ""}`}>
        {data.spaceBackground && <StaticImage
            className={styles.scrollList__background}
            src="../../../ui/benefits-illustration.png"
            placeholder="tracedSVG"
            quality="100"
            alt=""
            style={{position: "absolute"}} />}
			<div className={`${styles.scrollList__container} container`}>

				<div className={`${styles.scrollList__intro}`}>
                    <span className={`${styles.scrollList__tag} tag`}>{data.sectionLabel}</span>
                    <h2 className={styles.scrollList__heading}>{data.heading}</h2>
                    <Link to={data.button.url} className={`${styles.scrollList__button} button`}>
                        <span className="button__text">
                            {data.button.title}
                        </span>
                        <span className="button__orb">
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </span>
                    </Link>
                </div>

                <div className={`${styles.scrollList__scrollListItems} card-row`}>
					{data.scrollListItems.map((item,i) => (
                        <>
                            <div className={`${styles.scrollList__scrollListItem}`}>
                                <GatsbyImage className={`${styles.scrollList__scrollListItem_icon}`} image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />
                                <div className={`${styles.scrollList__scrollListItem_text}`}>
                                    <div className={`${styles.scrollList__scrollListItem_title}`} dangerouslySetInnerHTML={{ __html:item.itemTitle }}></div>
                                    <div className={`${styles.scrollList__scrollListItem_content}`} dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
                                </div>
                            </div>
                        </>
					))}
				</div>
            </div>

		</section>
  )
}

export default ScrollList
