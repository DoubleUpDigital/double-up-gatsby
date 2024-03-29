import React, { useEffect } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./numberedList.scss"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const NumberedList = data => {


  useEffect(() => {
    // pin and fade in background
    const container = document.querySelector(".NumberedList")
    const background = document.querySelector(".NumberedList__background")

    // ScrollTrigger.create({
    //   trigger: container,
    //   start: "center center",
    //   end: "bottom bottom",
    //   pin: '.NumberedList__background',
    //   markers: true,
    //   onEnter: () => {
    //     gsap.to(background, {
    //       duration: 0.5,
    //       opacity: 1,
    //       ease: "power2.inOut"
    //     })
    //   }
    // })


    var elements = gsap.utils.toArray(".NumberedList__item")
    elements.forEach(function (element) {
      ScrollTrigger.create({
        trigger: element,
        start: "top 50%+=40px",
        end: "bottom 50%",
        scrub: true,
        markers: false,
        onToggle: function ({progress, direction, isActive}) {
          // add class to corresponding heading
          var heading = document.querySelector(".NumberedList__title[data-num='" + element.getAttribute('data-num') + "']")
          heading.classList.add("active")

          var direction = direction * -1

          if(isActive) {
            heading.classList.add("active")
            element.classList.add("active")

            // bring heading into view
            gsap.to(heading, {
              duration: 0.5,
              y: 0,
              opacity: 1,
              ease: "ease"
            })
          }
          else {
            heading.classList.remove("active")
            element.classList.remove("active")

            // bring heading out of view
            gsap.to(heading, {
              duration: 0.5,
              y: 120 * direction,
              opacity: 0,
              ease: "ease"
            })
          }
        }
      })
    })

    return () => {
      // clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  })

  return (
		<section className="NumberedList">
      {/* <StaticImage
        className="NumberedList__background"
        src="../../../ui/full-space.png"
        placeholder="blurred"
        quality="80"
        alt="" /> */}
      <div className="container">

        <span className="tag NumberedList__tag">{data.tag}</span>
        <h2>{data.sectionHeading}</h2>
        <div className="NumberedList__intro">{data.content}</div>

        <div className="NumberedList__wrapper">

          <div className="NumberedList__list">
            {data.numberedItems.map((item,i) => (
              <div className={`NumberedList__title ${i === 0 ? "active" : ""}`} data-num={i} >
                <span className="NumberedList__number">{i<10 ? '0' : ''}{i+1}<span class="NumberedList__number-line"></span></span>
                <h3 className="NumberedList__heading">{item.itemHeading}</h3>
              </div>
            ))}
          </div>

          <div className="NumberedList__content">
            {data.numberedItems.map((item,i) => (
              <div className="NumberedList__item margin-fix" data-num={i} dangerouslySetInnerHTML={{ __html:item.itemContent }}></div>
            ))}
          </div>

        </div>

      </div>

		</section>
  )
}

export default NumberedList
