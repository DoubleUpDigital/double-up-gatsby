import React from 'react'
import "./dataSlider.scss"

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DataSlider = data => {
  return (
    <section className="dataSlider">

      <div className="container container--slider">
        <div className="dataSlider__slides">
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
              <button className="slick-arrow slick-next" aria-label="Next Slide">
              <FontAwesomeIcon className="slick-arrow-icon" icon={faLongArrowRight} />
              </button>
            )}
            prevArrow={(
              <button className="slick-arrow slick-prev" aria-label="Previous Slide">
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
