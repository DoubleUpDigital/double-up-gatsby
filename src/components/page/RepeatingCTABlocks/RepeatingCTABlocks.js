import React from 'react'
import "./repeatingCTABlocks.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const RepeatingCTABlocks = data => {
  return (
		<section className="repeatingCTABlocks">

      <div className="container">
        <div className="repeatingCTABlocks__blocks">
					{data.ctaBlocks.map((block,i) => (

              <div className="repeatingCTABlocks__block">
                <GatsbyImage
                  className="repeatingCTABlocks__graphic"
                  image={block.graphic.localFile.childImageSharp.gatsbyImageData}
                  alt={block.graphic.altText} />
                <div className="repeatingCTABlocks__heading">{block.heading}</div>
                <div className="repeatingCTABlocks__content">{block.content}</div>
                <Link to={block.button.url} key={'block_' + i} className="repeatingCTABlocks__link" target={block.button.target}>{block.button.title}</Link>
              </div>

					))}
			  </div>
      </div>

		</section>
  )
}

export default RepeatingCTABlocks
