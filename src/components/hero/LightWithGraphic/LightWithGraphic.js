import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./lightWithGraphic.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const LightWithGraphic = data => {
  return (
        <section className="heroLight">
            <GatsbyImage
            className="heroLight__graphic"
            image={data.graphic.localFile.childImageSharp.gatsbyImageData}
            alt=""
            style={{position: "absolute"}} />
            <div className="heroLight__content">
                <div className="container">
                    <div className="heroLight__inner">
                        <span className="heroLight__tag tag">{data.title}</span>
                        <h1 className="heroLight__title">{data.heading}</h1>
                        <div
                        className="heroLight__description"
                        dangerouslySetInnerHTML={{ __html:data.content}}>
                        </div>
                        <Link className="heroLight__cta" to={data.ctaLink.url}>{data.ctaLink.title} <FontAwesomeIcon icon={faLongArrowRight} /></Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default LightWithGraphic
