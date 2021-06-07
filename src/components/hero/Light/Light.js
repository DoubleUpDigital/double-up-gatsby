import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./light.scss"

const Light = data => {
  return (
		<section className={`hero ${data.centered ? "hero__centered"  : ""}`}>
			<div className="header-spacer"></div>
      <StaticImage
        className="hero__blob"
        src="../../../ui/blob-top-right.png"
        placeholder="tracedSVG"
				quality="100"
        alt=""
        style={{position: "absolute"}} />
      <StaticImage
        className="hero__space"
        src="../../../ui/space-on-dark.png"
        placeholder="blurred"
        quality="100"
        layout="fullWidth"
        alt=""
        style={{position: "absolute"}} />
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
