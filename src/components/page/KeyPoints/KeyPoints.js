import React, { useEffect, createRef } from 'react'
import "./KeyPoints.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const KeyPoints = data => {

  const zeroPad = (num, places) => String(num).padStart(places, '0')

  return (
		<section className="keyPoints">

      <div className={`keyPoints__container container container--wide`}>

        <div className="keyPoints__cols">
          <div className="keyPoints__col keyPoints__col--left">
            <div className="keyPoints__intro">
              <span className={`keyPoints__tag tag`}>{data.sectionLabel}</span>
              <h2 className="keyPoints__heading">{data.heading}</h2>
              <div className="keyPoints__text">{data.content}</div>
            </div>
          </div>
          <div className="keyPoints__col keyPoints__col--right">
            <div className={`keyPoints__list card-row`}>
              {data.keyPoints.map((item,i) => (
                <>
                  <div className="keyPoints__item">
                    <span className="keyPoints__item-index">{zeroPad(i + 1, 2)}</span>
                    <div className="keyPoints__item-text">
                      <h3 className="keyPoints__item-title" dangerouslySetInnerHTML={{ __html:item.itemTitle }}></h3>
                      <div className="keyPoints__item-content margin-fix" dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

	  </section>
  )
}

export default KeyPoints
