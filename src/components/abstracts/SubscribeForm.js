import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import GravityFormForm from 'gatsby-gravityforms-component'

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
          lambda={process.env.GATSBY_LAMBDA_ENDPOINT}
          successCallback={handleSuccess}
          errorCallback={handleError}
          className="subscribe-form"
      />

    )
}

export default SubscribeForm
