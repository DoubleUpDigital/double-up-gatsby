import React from 'react'
import * as styles from "./supportForm.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { Link } from "gatsby"
import GravityFormForm from 'gatsby-gravityforms-component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const SupportForm = data => {

    const AllGravityData = () => {
        const { allGfForm } = useStaticQuery(
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
        return allGfForm
    }

    function handleError({values, error, reset}) {
        //handle error
    }
    function handleSuccess({values, reset, confirmations}) {
        //handle success
    }

    return (

        <section className="SupportForm">
            <div className="container container--medium-2">
                <GravityFormForm
                    id={6}
                    formData={AllGravityData()}
                    lambda={process.env.LAMBDA_ENDPOINT}
                    successCallback={handleSuccess}
                    errorCallback={handleError}
                    className="SupportForm__form"
                />
            </div>
        </section>

    )
}

export default SupportForm