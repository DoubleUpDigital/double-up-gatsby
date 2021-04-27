import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./projectSlider.module.scss"
import { Link } from "gatsby"

import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const List = data => {
  return (
		<section className={styles.projectSlider}>
			<div className="container container--small">
				<span className={`${styles.projectSlider__tag} tag`}>{data.sectionLabel}</span>
				<h2 className={styles.projectSlider__heading}>{data.heading}</h2>
				<div className={`${styles.projectSlider__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
            <div className="container">
                {data.projects.map((project,i) => (
                    <div className="project-slide" key={'project_' + i}>
                        <span className="tag tag--yellow">Project</span>
                        <h3>{project.title}</h3>
                        <span className="tag tag--red">What we did</span>
                        <h3>{project.projectDetails.whatWeDid}</h3>
                        <Link to={project.uri} className="button button--inverted">
							<span className="button__text">
								View Project
							</span>
							<span className="button__orb">
								<FontAwesomeIcon icon={faLongArrowRight} />
							</span>
						</Link>
                    </div>
                ))}
            </div>
		</section>
  )
}

export default List