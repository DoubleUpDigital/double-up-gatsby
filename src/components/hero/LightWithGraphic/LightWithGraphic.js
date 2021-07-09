import React from 'react'
import "./lightWithGraphic.scss"
import { Link } from "gatsby"

import Lottie from "lottie-react"
import contactAnimation from "/content/assets/contact.json"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const LightWithGraphic = data => {
  return (
    <section className="heroContact">
      <Lottie className="heroContact__animation" animationData={contactAnimation} renderer="svg" />
      <div className="heroContact__content">
        <div className="container">
          <div className="heroContact__inner">
            <span className="heroContact__tag tag">{data.title}</span>
            <h1 className="heroContact__title">{data.heading}</h1>
            <div
            className="heroContact__description"
            dangerouslySetInnerHTML={{ __html:data.content}}>
            </div>
            <Link className="heroContact__cta" to={data.ctaLink.url}>{data.ctaLink.title} <FontAwesomeIcon icon={faLongArrowRight} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LightWithGraphic
