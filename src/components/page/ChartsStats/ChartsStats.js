import React, { useEffect, createRef } from 'react'
import "./ChartsStats.scss"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

import Squiggle from "../../abstracts/Squiggle"

const ChartsStats = data => {

  return (
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
      <section className={`component chartsStats
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>

        <div className={`chartsStats__container container container--wide`}>

          <div className="chartsStats__intro">
            <span className={`component__tag chartsStats__tag tag`}>{data.sectionLabel}</span>
            <h2 className="component__heading chartsStats__heading">{data.heading}</h2>
            <div className="component__content chartsStats__text">{data.content}</div>
          </div>

          <div className="chartsStats__charts">
            {data.charts.map((chart,i) => (
              <div className="chartsStats__chart" key={i}>
                <h3 className="chartsStats__chart-title">{chart.title}</h3>
                <div className="chartsStats__chart-image">
                  <GatsbyImage
                    image={chart.chart.gatsbyImage}
                    alt={chart.title}
                    />
                </div>
              </div>
            ))}
          </div>

          <div className="chartsStats__stats">
            <h3 className="chartsStats__stats-heading">{data.stats.heading}</h3>
            <div className="chartsStats__stats-dataPoints">
              {data.stats.dataPoints.map((dataPoint,i) => (
                <div className="chartsStats__stats-dataPoint" key={i}>
                  <div className="chartsStats__stats-dataPoint-icon">
                    {dataPoint.icon.localFile.extension != 'svg'
                      ? (<GatsbyImage
                      image={dataPoint.icon.gatsbyImage}
                      alt={dataPoint.label}
                      />)
                      : (<img
                          src={dataPoint.icon.localFile.publicURL}
                          alt={dataPoint.label}
                          />)
                    }

                  </div>
                  <span className="chartsStats__stats-dataPoint-value">{dataPoint.data}</span>
                  <span className="chartsStats__stats-dataPoint-label">{dataPoint.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default ChartsStats
