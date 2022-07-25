import React, { useEffect } from "react"
import "./KeyPoints.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const KeyPoints = data => {

  const zeroPad = (num, places) => String(num).padStart(places, '0')
  let observer

  const animateProcessItem = (element, delay = 0, onEnterView = null) => {

    // Animate function
    const animate = () => {
      element.classList.add('keyPoints__item--visible')
    }

    // On change function
    const onChange = changes => {
      changes.forEach(change => {
        if (change.intersectionRatio > 0) {
          if (onEnterView) onEnterView()
          animate()
          observer.unobserve(change.target)
        }
      })
    }

    // Init intersection Obsever
    // Only apply if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const options = {
        threshold: 0, // visible amount of item shown in relation to root
        rootMargin: '0px 0px -33% 0px' // margin around root element
      }
      observer = new IntersectionObserver(onChange, options)

      // start observing container
      observer.observe(element)
    } else {
      // Otherwise, force the animation so the items show
      animate()
    }
  }


  useEffect(() => {
    let process = document.querySelectorAll('.keyPoints__list')
    let processItems = document.querySelectorAll('.keyPoints__item')
    processItems.forEach(item => {
      animateProcessItem(item, 0)
    })
  })

  return (
		<section className="keyPoints">

      <div className={`keyPoints__container container container--wide`}>

        <div className="keyPoints__cols">
          <div className="keyPoints__col keyPoints__col--left animate-on-scroll animate-on-scroll--fade-right">
            <div className="keyPoints__intro">
              <span className={`keyPoints__tag tag`}>{data.sectionLabel}</span>
              <h2 className="keyPoints__heading">{data.heading}</h2>
              <div className="keyPoints__text">{data.content}</div>
            </div>
          </div>
          <div className="keyPoints__col keyPoints__col--right">
            {data.keyPoints != null && (
              <div className={`keyPoints__list card-row`}>
                {data.keyPoints.map((item,i) => (
                  <div className="keyPoints__item">
                    <span className="keyPoints__item-index">{zeroPad(i + 1, 2)}</span>
                    <div className="keyPoints__item-text">
                      <h3 className="keyPoints__item-title" dangerouslySetInnerHTML={{ __html:item.itemTitle }}></h3>
                      <div className="keyPoints__item-content margin-fix" dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

	  </section>
  )
}

export default KeyPoints
