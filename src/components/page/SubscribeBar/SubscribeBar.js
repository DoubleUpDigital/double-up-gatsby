import React from 'react'
import * as styles from "./SubscribeBar.scss"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { Link } from "gatsby"
import SubscribeForm from "../../abstracts/SubscribeForm"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const SubscribeBar = data => {

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

        <section className="component subscribeBar">
            <div className="container container--slider">
                {data.sectionLabel && <span className="tag component__tag subscribeBar__tag">{data.sectionLabel}</span>}
                <h2 className="component__heading subscribeBar__heading">{data.heading}</h2>
                <SubscribeForm/>
            </div>
        </section>

    )
}

export default SubscribeBar
