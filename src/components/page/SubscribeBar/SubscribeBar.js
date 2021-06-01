import React from 'react'
import * as styles from "./subscribeBar.module.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'


const SubscribeBar = data => {

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
            
			</div>
		</section>
    )
}

export default SubscribeBar
