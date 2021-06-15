import React from 'react'
import "./repeatingCtaBlocks.scss"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import SquiggleTop1 from '../../abstracts/squiggle-top-1'
import SquiggleTop2 from '../../abstracts/squiggle-top-2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const RepeatingCtaBlocks = data => {
  return (
    <>
    {data.background.squiggleTop == 'option1' && <SquiggleTop1 />}
    {data.background.squiggleTop == 'option2' && <SquiggleTop2 />}
    <section
    className={`RepeatingCtaBlocks component ${data.background.hasBackground ? 'component--with-background'  : ""} ${data.background.squiggleTop !== 'null' ? 'component--squiggleTop'  : ""} ${data.background.squiggleBottom !== 'null' ? 'component--squiggleBottom'  : ""}`}>


      <div className="container">
        <div className="RepeatingCtaBlocks__blocks">
					{data.ctaBlocks.map((block,i) => (

              <div className="RepeatingCtaBlocks__block">
                <GatsbyImage
                  className="RepeatingCtaBlocks__graphic"
                  image={block.graphic.localFile.childImageSharp.gatsbyImageData}
                  alt={block.graphic.altText} />
                <div className="RepeatingCtaBlocks__content">
                  <h2 className="RepeatingCtaBlocks__heading">{block.heading}</h2>
                  <div className="RepeatingCtaBlocks__text">{block.content}</div>
                  <Link to={block.button.url} key={'block_' + i} className="RepeatingCtaBlocks__link" target={block.button.target}>Learn More <FontAwesomeIcon icon={faLongArrowRight}/></Link>
                </div>
              </div>

					))}
			  </div>
      </div>

		</section>
    </>
  )
}

export default RepeatingCtaBlocks
