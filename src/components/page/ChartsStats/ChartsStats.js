import React from 'react'
import "./ChartsStats.scss"
import { GatsbyImage } from "gatsby-plugin-image"

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
            {data.sectionLabel && <span className={`component__tag chartsStats__tag tag`}>{data.sectionLabel}</span>}
            {data.heading && <h2 className="component__heading chartsStats__heading">{data.heading}</h2>}
            {data.content && <div className="component__content chartsStats__text">{data.content}</div>}
          </div>
          {data.charts !== null && (
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
          )}
          {data.stats.dataPoints !== null && (
            <div className="chartsStats__stats">
              {data.stats.heading && <h3 className="chartsStats__stats-heading">{data.stats.heading}</h3>}
              <div className="chartsStats__stats-dataPoints">
                {data.stats.dataPoints.map((dataPoint,i) => (
                  <div className="chartsStats__stats-dataPoint" key={i}>
                    {dataPoint.icon?.localFile && (
                      <div className="chartsStats__stats-dataPoint-icon">
                        {dataPoint.icon.localFile.extension !== 'svg'
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
                    )}
                    <div className="chartsStats__stats-dataPoint-text">
                      <span className="chartsStats__stats-dataPoint-value">{dataPoint.data}</span>
                      <span className="chartsStats__stats-dataPoint-label">{dataPoint.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default ChartsStats
