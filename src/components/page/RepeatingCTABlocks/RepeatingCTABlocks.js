import React from 'react'
import "./repeatingCtaBlocks.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const RepeatingCtaBlocks = data => {
  return (
		<section className="RepeatingCtaBlocks">

      <div className="container">
        <div className="RepeatingCtaBlocks__blocks">
					{data.ctaBlocks.map((block,i) => (

              <div className="RepeatingCtaBlocks__block">
                <GatsbyImage
                  className="RepeatingCtaBlocks__graphic"
                  image={block.graphic.localFile.childImageSharp.gatsbyImageData}
                  alt={block.graphic.altText} />
                <div className="RepeatingCtaBlocks__heading">{block.heading}</div>
                <div className="RepeatingCtaBlocks__content">{block.content}</div>
                <Link to={block.button.url} key={'block_' + i} className="RepeatingCtaBlocks__link" target={block.button.target}>{block.button.title}</Link>
              </div>

					))}
			  </div>
      </div>

		</section>
  )
}

export default RepeatingCtaBlocks
