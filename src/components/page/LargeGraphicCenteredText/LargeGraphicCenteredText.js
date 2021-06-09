import React from 'react'
import "./largeGraphicCenteredText.scss"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const LargeGraphicCenteredText = data => {
  return (
		<section className="LargeGraphicCenteredText">
            <StaticImage
              className="LargeGraphicCenteredText__bg"
              src="../../../ui/light-blue-squiggle-top.png"
              placeholder="tracedSVG"
              quality="100"
              alt=""
              style={{position: "absolute"}} />
			<div className="LargeGraphicCenteredText__inner">
                <div className="container container--medium-2">
                    <GatsbyImage
                        className="LargeGraphicCenteredText__graphic"
                        image={data.graphic.localFile.childImageSharp.gatsbyImageData}
                        alt={data.altText} />
                        <h2>{data.heading}</h2>
                        <div className="LargeGraphicCenteredText__content" dangerouslySetInnerHTML={{ __html:data.content }}></div>
                </div>
            </div>
		</section>
  )
}

export default LargeGraphicCenteredText
