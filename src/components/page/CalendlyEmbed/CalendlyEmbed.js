import React, { useEffect } from 'react'
import {InlineWidget} from 'react-calendly'

import "./CalendlyEmbed.scss"

const CalendlyEmbed = data => {

  useEffect(() => {

  })

  return (
    <section className={`component calendly-embed`}>
      <div className={`calendly-embed__container container ${data.leftWithGraphic ? "container--wide" : "container--small"}`}>
        <div className="calendly-embed__wrap">
          <InlineWidget
            url={data.url}
            pageSettings={{
              hideEventTypeDetails: true,
              hideLandingPageDetails: false,
            }}
            styles={{
              height: '800px',
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default CalendlyEmbed
