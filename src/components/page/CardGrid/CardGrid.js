import React from 'react'
import * as styles from "./cardGrid.module.scss"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const CardGrid = data => {
  return (
		<section className={styles.cardGrid}>
			<div className="container container--small">
				<span className={`${styles.cardGrid__tag} tag`}>{data.sectionLabel}</span>
				<h2 className={styles.cardGrid__heading}>{data.heading}</h2>
				<div className={`${styles.cardGrid__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
            </div>

            <div className="container">
                <div className={`${styles.cardGrid__cards} card-row`}>
					{data.cards.map((card,i) => (
                        <>
    						<Link to={card.cardLink.url} key={'card_' + i} className={`${styles.cardGrid__card} card`}>
                                <div className={`${styles.cardGrid__card_main}`}>
                                    <GatsbyImage image={card.cardImage.localFile.childImageSharp.gatsbyImageData} />
                                    <div className={`${styles.cardGrid__card_title}`}>{card.cardTitle}</div>
                                    <div className={`${styles.cardGrid__card_content}`}>{card.cardContent}</div>
                                </div>
    							<span className={`${styles.cardGrid__card_link} text-${card.cardColor} fake-button`}>Learn More <FontAwesomeIcon icon={faLongArrowRight} /></span>
    						</Link>
                        </>
					))}
				</div>
            </div>

		</section>
  )
}

export default CardGrid
