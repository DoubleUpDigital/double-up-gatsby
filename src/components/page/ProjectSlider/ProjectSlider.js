import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import "./projectSlider.scss"
import { Link } from "gatsby"

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

import WordPressLogo from "/src/ui/wordpress.svg"
import GatsbyLogo from "/src/ui/gatsby.svg"
import ShopifyLogo from "/src/ui/shopify.svg"
import WooCommerceLogo from "/src/ui/woocommerce.svg"

const List = data => {
  return (
		<section className="projectSlider">
			<div className="container container--small">
				<span className="tag projectSlider__tag">{data.sectionLabel}</span>
				<h2 className="projectSlider__heading">{data.heading}</h2>
				<div className="projectSlider__content margin-fix" dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
      <div className="container">
        <Slider
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          fade={true}
          className="projectSlider__slider"
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
          {data.projects.map((project,i) => (
            <div className="project-slide" key={'project_' + i}>
            <div className="projectSlider__mobile-blocks">
              <div className="projectSlider__mobile-block">
                  <span className="tag tag--yellow">Project</span>
                  <h3>{project.title}</h3>
              </div>
              <div className="projectSlider__mobile-block">
                  <span className="tag tag--red">What we did</span>
                  <h3>{project.projectDetails.whatWeDid}</h3>
              </div>
            </div>
              <GatsbyImage
                className="projectSlider__slide-image"
                image={project.projectDetails.screenshots.fullPageDesktop.localFile.childImageSharp.gatsbyImageData}
                alt={project.projectDetails.screenshots.fullPageDesktop.altText} />
              <div className="projectSlider__slide-info">
                <div className="projectSlider__slide-info-block">
                    <span className="tag tag--yellow">Project</span>
                    <h3>{project.title}</h3>
                </div>
                <div className="projectSlider__slide-info-block">
                    <span className="tag tag--red">What we did</span>
                    <h3>{project.projectDetails.whatWeDid}</h3>
                </div>
                <div className="projectSlider__slide-info-block">
                    <span className="tag tag--purple">Platform</span>
                    <div className="projectSlider__slide-platforms">
                        {project.projectDetails.platform.map((item) => (
                            <div className="projectSlider__slide-platforms-item">
                            {item === 'wordpress' &&
                                <img src={WordPressLogo} alt="" />
                            }
                            {item === 'woocommerce' &&
                                <img src={WooCommerceLogo} alt="" />
                            }
                            {item === 'shopify' &&
                                <img src={ShopifyLogo} alt="" />
                            }
                            {item === 'gatsby' &&
                                <img src={GatsbyLogo} alt="" />
                            }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="projectSlider__slide-info-cta">
                  <Link to={project.uri} className="button button--inverted">
      							<span className="button__text">
      								View Project
      							</span>
      							<span className="button__orb">
      								<FontAwesomeIcon icon={faLongArrowRight} />
      							</span>
      						</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
		</section>
  )
}

export default List
