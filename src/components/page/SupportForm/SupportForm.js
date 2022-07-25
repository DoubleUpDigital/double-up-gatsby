import React from 'react'
import "./supportForm.scss"
import { useStaticQuery, graphql } from "gatsby"
import GravityFormForm from 'gatsby-gravityforms-component'


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
                    lambda={process.env.GATSBY_LAMBDA_ENDPOINT}
                    successCallback={handleSuccess}
                    errorCallback={handleError}
                    className="SupportForm__form"
                />
            </div>
        </section>

    )
}

export default SupportForm
