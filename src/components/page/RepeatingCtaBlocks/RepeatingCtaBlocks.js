import React from 'react'
import "./repeatingCtaBlocks.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Squiggle from "../../abstracts/Squiggle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const RepeatingCtaBlocks = data => {
  return (
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
      <section
      className={`RepeatingCtaBlocks component
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
        <div className="container">
          <div className="RepeatingCtaBlocks__blocks margin-fix">
  					{data.ctaBlocks.map((block,i) => (

              <Link className="RepeatingCtaBlocks__block" to={block.button.url} key={'block_' + i}>
                {block.graphic && (
                  <GatsbyImage
                    className="RepeatingCtaBlocks__graphic"
                    image={block.graphic.localFile.childImageSharp.gatsbyImageData}
                    alt={block.graphic.altText} />
                )}
                <div className="RepeatingCtaBlocks__content">
                  <h2 className="RepeatingCtaBlocks__heading">{block.heading}</h2>
                  {block.content && <div className="RepeatingCtaBlocks__text">{block.content}</div>}
                  {block.button.title && <span className="RepeatingCtaBlocks__link">{block.button.title} <FontAwesomeIcon icon={faLongArrowRight}/></span>}
                </div>
              </Link>

  					))}
  			  </div>
        </div>
  		</section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default RepeatingCtaBlocks
