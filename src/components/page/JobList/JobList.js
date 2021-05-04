import React from 'react'
import * as styles from "./jobList.module.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

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
		<section className={`component ${styles.jobList}`}>
			<div className="container container--small">
				<span className={`tag component__tag ${styles.jobList__tag}`}>{data.sectionLabel}</span>
				<h2 className={`component__heading ${styles.jobList__heading}`}>{data.heading}</h2>
				<div className={`component__content ${styles.jobList__content} margin-fix`} dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
      <div className={styles.jobList__list}>
        {jobs.allWpJob.nodes.map((job, i) => (
          <div className={styles.jobList__list_item} key={'job_' + i}>
            <Link to={job.uri}>
              {job.title}
            </Link>
          </div>
        ))}
      </div>
		</section>
  )
}

export default JobList
