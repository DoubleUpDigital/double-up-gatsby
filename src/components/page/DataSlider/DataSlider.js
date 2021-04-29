import React from 'react'
import * as styles from "./dataSlider.module.scss"
import { Link } from "gatsby"

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DataSlider = data => {
  return (
		<section className={styles.dataSlider}>

            <div className="container container--slider">
                <div className={`${styles.dataSlider__slides}`}>
                    <Slider
                        dots={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={5000}
                        fade={true}
                        className={styles.dataSlider__slider}
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
                            <div className={`${styles.dataSlider__slide}`}>
                                <div className={`${styles.dataSlider__slide_content}`} dangerouslySetInnerHTML={{ __html:slide.slideContent }}></div>
                                <div className={`${styles.dataSlider__slide_data}`}>
                                    <div className={`${styles.dataSlider__slide_dataPrefix}`}>{slide.slideDataPrefix}</div>
                                    <div className={`${styles.dataSlider__slide_dataNumber}`}>{slide.slideData}</div>
                                    <div className={`${styles.dataSlider__slide_dataSuffix}`}>{slide.slideDataSuffix}</div>
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
