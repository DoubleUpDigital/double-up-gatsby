import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import "./testimonials.scss"
import { Link } from "gatsby"

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SquiggleTop1 from '../../abstracts/squiggle-top-1'
import SquiggleTop2 from '../../abstracts/squiggle-top-2'
import SquiggleBottom1 from '../../abstracts/squiggle-bottom-1'

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

const Testimonials = data => {
  return (
		<section className={`Testimonials ${data.background.hasBackground ? 'component--with-background'  : ""} ${data.background.squiggleTop !== 'null' ? 'component--squiggleTop'  : ""} ${data.background.squiggleBottom !== 'null' ? 'component--squiggleBottom'  : ""}`}>
			<div className="Testimonials__inner">
        <div className="container container--small">
  				<h2 className="Testimonials__heading">{data.heading}</h2>
  			</div>
        <div className="container container--small">
          <Slider
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            fade={true}
            className="Testimonials__slider"
            arrows={true}
            nextArrow={(
              <button className="slick-arrow slick-next">
                <FontAwesomeIcon className="slick-arrow-icon" icon={faLongArrowRight} />
              </button>
            )}
            prevArrow={(
              <button className="slick-arrow slick-prev">
                <FontAwesomeIcon className="slick-arrow-icon" icon={faLongArrowLeft} />
              </button>
            )}
          >
            {data.selectedTestimonials.map((testimonial,i) => (
              <div className="Testimonials__slide" key={'testimonial_' + i}>
                <div className="Testimonials__slide-info">
                  <div className="Testimonials__slide-text" dangerouslySetInnerHTML={{__html: testimonial.content}}></div>
                  <div className="Testimonials__slide-name">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {data.background.squiggleTop === 'option1' && <SquiggleTop1 />}
      {data.background.squiggleTop === 'option2' && <SquiggleTop2 />}
      {data.background.squiggleBottom === 'option1' && <SquiggleBottom1 />}
		</section>
  )
}

export default Testimonials
