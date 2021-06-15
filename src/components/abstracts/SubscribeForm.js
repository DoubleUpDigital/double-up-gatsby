import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
// import { Link } from "gatsby"
import GravityFormForm from 'gatsby-gravityforms-component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const SubscribeForm = data => {

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

      <GravityFormForm
          id={4}
          formData={AllGravityData()}
          lambda={process.env.LAMBDA_ENDPOINT}
          successCallback={handleSuccess}
          errorCallback={handleError}
          className="subscribe-form"
      />

    )
}

export default SubscribeForm
