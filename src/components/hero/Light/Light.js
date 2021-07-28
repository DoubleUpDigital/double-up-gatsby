import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./light.scss"
import Lottie from "lottie-react"
import animationData from "/content/assets/blob-top-right.json"
import darkAnimationData from "/content/assets/dark-hero.json"

const Light = data => {
  return (
		<section className={`hero ${data.centered ? "hero__centered"  : ""} ${data.background ? "hero__background"  : ""}`}>
			<div className="header-spacer"></div>
      <Lottie
        className="hero__blob"
        animationData={animationData}
        renderer="svg" />
      <Lottie
        className="hero__space"
        animationData={darkAnimationData}
        renderer="svg" />
			<div className="hero__content">
				<div className="container">
					<span className="hero__tag tag">{data.title}</span>
				  <h1 className={`hero__title ${data.centered ? "hero__title--centered"  : ""}`}>{data.heading}</h1>
					<div
						className="hero__description margin-fix`"
						dangerouslySetInnerHTML={{ __html:data.content}}>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Light
