import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./projectSlider.module.scss"
import { Link } from "gatsby"

import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

const List = data => {
  return (
		<section className={styles.projectSlider}>
			<div className="container container--small">
				<span className={`${styles.projectSlider__tag} tag`}>{data.sectionLabel}</span>
				<h2 className={styles.projectSlider__heading}>{data.heading}</h2>
				<div className={`${styles.projectSlider__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
            <div className="container">
                <Slider
                    dots={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    fade={true}
                    className={styles.projectSlider__slider}
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
                            <GatsbyImage 
                                className={`${styles.projectSlider__slide_image}`} 
                                image={project.projectDetails.screenshots.primaryDesktop.localFile.childImageSharp.gatsbyImageData} 
                                alt={project.projectDetails.screenshots.primaryDesktop.altText} />
                            <div className={styles.projectSlider__slide_info}>
                                <div className={styles.projectSlider__slide_info_block}>
                                    <span className="tag tag--yellow">Project</span>
                                    <h3>{project.title}</h3>
                                </div>
                                <div className={styles.projectSlider__slide_info_block}>
                                    <span className="tag tag--red">What we did</span>
                                    <h3>{project.projectDetails.whatWeDid}</h3>
                                </div>
                                <div className={styles.projectSlider__slide_info_cta}>
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