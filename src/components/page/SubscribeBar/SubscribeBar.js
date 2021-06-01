import React from 'react'
import * as styles from "./subscribeBar.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
// import GravityFormForm from 'gatsby-gravityforms-component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'



const SubscribeBar = data => {
    const AllGravityData = () => {
        const { AllGfForm } = useStaticQuery(
            graphql`
                query {
                    allGfForm {
                        edges {
                            node {
                                ...GravityFormComponent
                            }
                        }
                    }
                }
            `
        )
        return AllGfForm
    }
    function handleError({values, error, reset}) {
        //handle error
    }
    function handleSuccess({values, reset, confirmations}) {
        //handle success
    }
    return (

		<section className={`component ${styles.subscribeBar}`}>
			<div className="container container--slider">
				{data.sectionLabel && <span className={`tag component__tag ${styles.subscribeBar__tag}`}>{data.sectionLabel}</span>}
				<h2 className={`component__heading ${styles.subscribeBar__heading}`}>{data.heading}</h2>
                // <GravityFormForm
                // id={4}
                // formData={AllGravityData()}
                // // lambda={process.env.LAMBDA_ENDPOINT}
                // successCallback={handleSuccess}
                // errorCallback={handleError}
                // ></GravityFormForm>
			</div>
		</section>
    )
}

export default SubscribeBar
