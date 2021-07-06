import React from 'react'
import * as styles from "./contactForm.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { Link } from "gatsby"
import GravityFormForm from 'gatsby-gravityforms-component'
import Squiggle from "../../abstracts/Squiggle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const ContactForm = data => {

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
      <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
        <section className={`ContactForm component
          ${data.background.hasBackground ? 'component--with-background'  : ""}
          ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
          ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
          ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
            <div className="container container--medium-2">
                <h2 className="ContactForm__heading">{data.heading}</h2>
                <GravityFormForm
                    id={5}
                    formData={AllGravityData()}
                    lambda={process.env.LAMBDA_ENDPOINT}
                    successCallback={handleSuccess}
                    errorCallback={handleError}
                    className="ContactForm__form"
                />
            </div>
        </section>
        {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
      </>

    )
}

export default ContactForm
