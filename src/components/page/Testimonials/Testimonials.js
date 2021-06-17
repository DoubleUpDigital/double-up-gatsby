import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import "./testimonials.scss"
import { Link } from "gatsby"

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

const Testimonials = data => {
  return (
		<section className="Testimonials">
			<div className="container container--small">
				<h2 className="Testimonials__heading">{data.heading}</h2>
			</div>
      <div className="container">
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
                <div dangerouslySetInnerHTML={{__html: testimonial.content}}></div>
                <h3>{testimonial.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
		</section>
  )
}

export default Testimonials
