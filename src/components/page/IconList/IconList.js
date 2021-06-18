import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "./iconList.module.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const IconList = data => {
  return (
		<section className={`${styles.iconList}`}>
            <div className={`${styles.iconList__flex} container`}>
                <div class={`${styles.iconList__textHalf}`}>
                    <span className={`${styles.iconList__tag} tag`}>{data.sectionLabel}</span>
                    <h2 className={styles.iconList__heading}>{data.heading}</h2>
                    <div className={`${styles.iconList__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
                    <Link to={data.link.url} className={`${styles.scrollList__button} button`}>
                        <span className="button__text">
                            {data.link.title}
                        </span>
                        <span className="button__orb">
                            <FontAwesomeIcon icon={faLongArrowRight} />
                        </span>
                    </Link>
                </div>
                <ul className={`${styles.iconList__items}`}>
                    {data.listItems.map((item,i) => (
                        <li className={`${styles.iconList__items_item}`} key={'listItem_' + i}>
                            <GatsbyImage
                            className={`${styles.iconList__items_item_icon}`}
                            image={item.itemIcon.localFile.childImageSharp.gatsbyImageData} />
                            <span className={styles.iconList__items_item_text}>{item.itemText}</span>
                        </li>
                    ))}
                </ul>
            </div>
		</section>
  )
}

export default IconList
