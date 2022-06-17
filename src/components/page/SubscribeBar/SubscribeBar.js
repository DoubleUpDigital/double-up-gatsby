import React from 'react'
import "./SubscribeBar.scss"
import SubscribeForm from "../../abstracts/SubscribeForm"

const SubscribeBar = data => {

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
