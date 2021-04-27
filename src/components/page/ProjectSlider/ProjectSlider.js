import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./projectSlider.module.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
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
                    <Link to={project.uri} key={'project_' + i}>
                        {project.title}
                    </Link>
                ))}
            </div>
		</section>
  )
}

export default List