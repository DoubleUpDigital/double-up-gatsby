import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import "./testimonials.scss"
import { Link } from "gatsby"

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Squiggle from "../../abstracts/Squiggle"

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Testimonials = data => {
  return (
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
  		<section className={`component Testimonials
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
  			<div className="Testimonials__inner">
          <div className="container container--small">
    				<h2 className="Testimonials__heading animate-on-scroll">{data.heading}</h2>
    			</div>
          <div className="container container--small">
            <Slider
              dots={false}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              fade={true}
              className="Testimonials__slider animate-on-scroll animate-on-scroll--fade-up"
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
  		</section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default Testimonials
