import React from 'react'
import * as styles from "./cardSlider.scss"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Squiggle from "../../abstracts/Squiggle"
import Lottie from "lottie-react"

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'

const CardSlider = data => {
  return (
    <>
    {data.animation && <div className="cardSlider__spacer"></div>}
    {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
    <section className={`component cardSlider
      ${data.background.hasBackground ? 'component--with-background'  : ""}
      ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
      ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
      ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>

      <div className="cardSlider__container container container--medium-2">
        {data.animation && <Lottie
          className="cardSlider__animation"
          path={data.animation.localFile.publicURL}
          renderer="svg" />}
        <div className="cardSlider__sliderContainer">
          <span className="cardSlider__tag tag">{data.sectionLabel}</span>
          <h2 className="cardSlider__heading">{data.heading}</h2>

          <div className="cardSlider__cards card-row">
            <Slider
              dots={false}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={false}
              autoplaySpeed={5000}
              infinite={false}
              className="cardSlider__slider"
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
                  <div className="cardSlider__card">
                    <div className={`cardSlider__card_subheading  text-${card.color}`}>{card.subheading}</div>
                    <div className="cardSlider__card_heading">{card.heading}</div>
                    <div className="cardSlider__card_content">{card.content}</div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>

    </section>
    {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default CardSlider
