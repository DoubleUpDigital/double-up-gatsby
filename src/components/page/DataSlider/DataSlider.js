import React from 'react'
import * as styles from "./dataSlider.scss"
import { Link } from "gatsby"

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DataSlider = data => {
  return (
    <section className="dataSlider">

      <div className="container container--slider">
        <div className="dataSlider__slides animate-on-scroll animate-on-scroll--fade-up">
          <Slider
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            fade={true}
            className="dataSlider__slider"
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
            {data.dataSlides.map((slide,i) => (
              <div className="dataSlider__slide">
                <div className="dataSlider__slide_content" dangerouslySetInnerHTML={{ __html:slide.slideContent }}></div>
                <div className="dataSlider__slide_data">
                  <div className="dataSlider__slide_dataPrefix">{slide.slideDataPrefix}</div>
                  <div className="dataSlider__slide_dataNumber">{slide.slideData}</div>
                  <div className="dataSlider__slide_dataSuffix">{slide.slideDataSuffix}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </section>
  )
}

export default DataSlider
