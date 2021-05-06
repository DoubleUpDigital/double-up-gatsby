import React from 'react'
import * as styles from "./cardSlider.module.scss"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'

const CardSlider = data => {
  return (
		<section className={styles.cardSlider}>
        <StaticImage
            className={styles.cardSlider__Space}
            src="../../../ui/card-slider-illustration.png"
            placeholder="tracedSVG"
            quality="100"
            height="918"
            alt="Space Background"
            style={{position: "absolute"}} />
            <div className={`${styles.cardSlider__container} container`}>

                <div className={styles.cardSlider__sliderContainer}>
                    <span className={`${styles.cardSlider__tag} tag`}>{data.sectionLabel}</span>
                    <h2 className={styles.cardSlider__heading}>{data.heading}</h2>

                    <div className={`${styles.cardSlider__cards} card-row`}>
                        <Slider
                            dots={false}
                            slidesToShow={2}
                            slidesToScroll={1}
                            autoplay={false}
                            autoplaySpeed={5000}
                            infinite={false}
                            className={styles.cardSlider__slider}
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
                            )} >
                            {data.cards.map((card,i) => (
                                <>
                                    <div className={`${styles.cardSlider__card}`}>
                                        <GatsbyImage
                                            className={`${styles.cardSlider__card_icon}`}
                                            image={card.icon.localFile.childImageSharp.gatsbyImageData}
                                            alt={card.icon.altText} />
                                        <div className={`${styles.cardSlider__card_subheading}  text-${card.color}`}>{card.subheading}</div>
                                        <div className={`${styles.cardSlider__card_heading}`}>{card.heading}</div>
                                        <div className={`${styles.cardSlider__card_content}`}>{card.content}</div>
                                    </div>
                                </>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
		</section>
  )
}

export default CardSlider
