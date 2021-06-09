import React from 'react'
import * as styles from "./jobList.module.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faClock } from '@fortawesome/pro-regular-svg-icons'
import { faMapMarkerAlt, faUsersClass } from '@fortawesome/pro-solid-svg-icons'

const JobList = data => {
  const jobs = useStaticQuery(graphql `
    {
      allWpJob(sort: {fields: date, order: DESC}){
        nodes {
          title
          uri
          jobsCity
          jobsCountryId
          jobsDepartment
          jobsDescription
          jobsId
          jobsOriginalOpenDate
          jobsQuestionnaire
          jobsQuestionnaireQuestions
          jobsState
          jobsStateFull
          jobsStatus
          jobsType
          jobsZip
        }
      }
    }

  `)
  return (
		<section className={`component light-blue-section ${styles.jobList}`}>
			<div className="container container--small">
				<span className={`tag component__tag ${styles.jobList__tag}`}>{data.sectionLabel}</span>
				<h2 className={`component__heading ${styles.jobList__heading}`}>{data.heading}</h2>
				<div className={`component__content ${styles.jobList__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
      <div className="container">
        <div className={`${styles.jobList__list} margin-fix`}>
          {jobs.allWpJob.nodes.map((job, i) => (
            <Link to={job.uri} className={styles.jobList__list_item} key={'job_' + i}>
              <h3 className={styles.jobList__list_item_title}>
                {job.title}
              </h3>
              <div className={styles.jobList__list_item_tags}>
                {job.jobsType && <span className={`${styles.jobList__list_item_tags_tag} tag tag--gray tag--small`}><FontAwesomeIcon icon={faClock} /> {job.jobsType}</span>}
                {job.jobsCity && <span className={`${styles.jobList__list_item_tags_tag} tag tag--gray tag--small`}><FontAwesomeIcon icon={faMapMarkerAlt} /> {job.jobsCity}, {job.jobsState}</span>}
                {job.jobsDepartment && <span className={`${styles.jobList__list_item_tags_tag} tag tag--purple tag--small`}><FontAwesomeIcon icon={faUsersClass} /> {job.jobsDepartment}</span>}
              </div>
							<span className={`button__orb ${styles.jobList__list_item_orb}`}>
								<FontAwesomeIcon icon={faLongArrowRight} />
							</span>
            </Link>
          ))}
        </div>
      </div>
		</section>
  )
}

export default JobList
