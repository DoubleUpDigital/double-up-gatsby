import React from 'react'
import "./cardGrid.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const CardGrid = data => {
  return (
		<section className="cardGrid">
			<div className="container container--small">
				<span className="cardGrid__tag tag">{data.sectionLabel}</span>
				<h2 className="cardGrid__heading">{data.heading}</h2>
				<div className="cardGrid__content margin-fix" dangerouslySetInnerHTML={{ __html:data.content }}></div>
      </div>

      <div className="container">
        <div className="card-row cardGrid__cards">
					{data.cards.map((card,i) => (
						<Link to={card.cardLink.url} key={'card_' + i} className="card cardGrid__card">
              <div className="cardGrid__card-main">
                <GatsbyImage
                  className="cardGrid__card-image"
                  image={card.cardImage.localFile.childImageSharp.gatsbyImageData}
                  alt={card.cardImage.altText} />
                <div className="cardGrid__card-title">{card.cardTitle}</div>
                <div className="cardGrid__card-content">{card.cardContent}</div>
              </div>
              <div className="cardGrid__card-actions">
  							<span className={`cardGrid__card-link fake-button`}>{card.cardLink.title} <FontAwesomeIcon icon={faLongArrowRight} /></span>
              </div>
						</Link>
					))}
			  </div>
      </div>

		</section>
  )
}

export default CardGrid
