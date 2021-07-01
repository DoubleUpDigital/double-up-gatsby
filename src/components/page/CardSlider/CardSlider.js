import React from 'react'
import * as styles from "./cardSlider.module.scss"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import SquiggleTop1 from '../../abstracts/squiggle-top-1'
import SquiggleTop2 from '../../abstracts/squiggle-top-2'
import SquiggleBottom1 from '../../abstracts/squiggle-bottom-1'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'

const CardSlider = data => {
  return (
    <>
    {data.graphic && <div className={`${styles.cardSlider__spacer}`}></div>}
    {data.background.squiggleTop === 'option1' && <SquiggleTop1 />}
    {data.background.squiggleTop === 'option2' && <SquiggleTop2 />}

		<section className={`${styles.cardSlider} ${data.graphic ? styles.cardSlider__withGraphic : ""} ${data.background.hasBackground ? 'component--with-background'  : ""} ${data.background.squiggleTop !== 'null' ? 'component--squiggleTop'  : ""} ${data.background.squiggleBottom !== 'null' ? 'component--squiggleBottom'  : ""}`}>
      {data.graphic && <GatsbyImage
        alt={data.graphic.altText}
        image={data.graphic.localFile.childImageSharp.gatsbyImageData}
        className={`${styles.cardSlider__graphic}`}
        style={{position:"absolute"}}
        />}
            <div className={`${styles.cardSlider__container} container container--medium-2`}>

                <div className={styles.cardSlider__sliderContainer}>
                    <span className={`${styles.cardSlider__tag} tag`}>{data.sectionLabel}</span>
                    <h2 className={styles.cardSlider__heading}>{data.heading}</h2>

                    <div className={`${styles.cardSlider__cards} card-row`}>
                        <Slider
                            dots={false}
                            slidesToShow={3}
                            slidesToScroll={1}
                            autoplay={false}
                            autoplaySpeed={5000}
                            infinite={false}
                            className={styles.cardSlider__slider}
                            arrows={true}
                            responsive={
                              [
                                {
                                  breakpoint: 769,
                                    settings:
                                    {
                                      slidesToShow: 1
                                    },
                                },
                              ]
                            }
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
    {data.background.squiggleBottom === 'option1' && <SquiggleBottom1 />}
    </>
  )
}

export default CardSlider
