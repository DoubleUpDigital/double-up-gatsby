import React, { useEffect, createRef } from 'react'
import lottie from "lottie-web"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import ArrowAnim1 from "/content/assets/arrow-1.json"
import ArrowAnim2 from "/content/assets/arrow-2.json"
import ArrowAnim3 from "/content/assets/arrow-3.json"
import ArrowAnim4 from "/content/assets/arrow-4.json"

const TeamTile = ({ person }) => {

  const animationContainer = createRef()
  const anim = createRef();
  const beanType = parseInt(person.teamMemberDetails.beans.type)

  let animationData = false
  let animationSpeed = 1
  if(beanType === 1 || beanType === 6) {
    animationData = ArrowAnim1
    animationSpeed = 1.5
  } else if(beanType === 2) {
    animationData = ArrowAnim2
  } else if(beanType === 3 || beanType === 4) {
    animationData = ArrowAnim3
    animationSpeed = 1.4
  } else if(beanType === 5) {
    animationData = ArrowAnim4
    animationSpeed = 1.3
  }

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          progressiveLoad: true,
          preserveAspectRatio: 'xMidYMid slice'
        }
      });

      return () => anim.current?.destroy()
    }
  })

  return (
    <Link
      className={`teamGrid__gridItem beanType--${person.teamMemberDetails.beans.type} animate-on-scroll`}
      key={person.id}
      to={person.uri}
      onMouseEnter={() => {
        anim.current?.setSpeed(animationSpeed)
        anim.current?.setDirection(1)
        anim.current?.play()
      }}
      onMouseLeave={() => {
        anim.current?.setDirection(-1)
        anim.current?.play()
      }}
      >
      <div className="teamGrid__gridItem-quip">
        <span className="teamGrid__gridItem-quip-text">Click to get to know {person.teamMemberDetails.firstName}</span>
        <div
          ref={animationContainer}
          className="teamGrid__gridItem-quip-arrow"
        />
      </div>
      <div className="teamGrid__gridItem-image">
        <GatsbyImage
          image={person.teamMemberDetails.beans.archiveImage.gatsbyImage}
          alt={person.title}
          />
      </div>
      <div className="teamGrid__gridItem-text">
        <h3 className="teamGrid__gridItem-heading">{person.title}</h3>
        <span className="teamGrid__gridItem-title">{person.teamMemberDetails.title}</span>
      </div>
    </Link>
  )
}

export default TeamTile
