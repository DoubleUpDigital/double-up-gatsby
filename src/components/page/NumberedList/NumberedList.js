import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./numberedList.scss"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const NumberedList = data => {

    // function showText(id) {
    //     var element = document.getElementById(id);
    //     element.className += ' active';
    //     console.log(element);
    // }

  return (
		<section className="NumberedList">
            <div className="container">
                <h2>{data.sectionHeading}</h2>
                <div className="NumberedList__list">
                    {data.numberedItems.map((item,i) => (
                        <div id={i} className="NumberedList__item" key={'item_' + i}>
                            <div className="NumberedList__title">
                                <span className="NumberedList__number">{i<10 ? '0' : ''}{i+1}<span class="NumberedList__number-line"></span></span>
                                <h3 className="NumberedList__heading">{item.itemHeading}</h3>
                             </div>
                             <div className="NumberedList__content" dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
                        </div>
                    ))}
                </div>
            </div>
		</section>
  )
}

export default NumberedList
