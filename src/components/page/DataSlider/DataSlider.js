import React from 'react'
import * as styles from "./dataSlider.module.scss"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const DataSlider = data => {
  return (
		<section className={styles.dataSlider}>

            <div className="container container--small">
                <div className={`${styles.dataSlider__slides}`}>
					{data.dataSlides.map((slide,i) => (
                        <div className={`${styles.dataSlider__slide}`}>
                            <div className={`${styles.dataSlider__slide_content}`} dangerouslySetInnerHTML={{ __html:slide.slideContent }}></div>
                            <div className={`${styles.dataSlider__slide_dataPrefix}`}>{slide.slideDataPrefix}</div>
                            <div className={`${styles.dataSlider__slide_data}`}>{slide.slideData}</div>
                            <div className={`${styles.dataSlider__slide_dataSuffix}`}>{slide.slideDataSuffix}</div>
                        </div>
					))}
				</div>
            </div>

		</section>
  )
}

export default DataSlider
