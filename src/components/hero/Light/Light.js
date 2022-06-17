import React, { useEffect, createRef } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import lottie from "lottie-web"
import { StaticImage } from "gatsby-plugin-image"
import "./light.scss"
import animationData from "/content/assets/blob-top-right.json"
import darkAnimationData from "/content/assets/dark-hero.json"
import GravityFormForm from 'gatsby-gravityforms-component'

const Light = data => {

  let animation = createRef()
  let animationDark = createRef()

  useEffect(() => {
    if(animationData) {
      const anim1 = lottie.loadAnimation({
        container: animation.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
        renderer: 'svg',
        rendererSettings: {
          progressiveLoad: true
        }
      })

      const anim2 = lottie.loadAnimation({
        container: animationDark.current,
        animationData: darkAnimationData,
        loop: true,
        autoplay: true,
        renderer: 'svg',
        rendererSettings: {
          progressiveLoad: true
        }
      })

      return () => anim1.destroy() + anim2.destroy()
    }
  })

  const AllGravityData = () => {
    const { allGfForm } = useStaticQuery(
      graphql`
        query {
          allGfForm {
            edges {
              node {
                ...GravityFormComponent
              }
            }
          }
        }
      `
    )
    return allGfForm
  }

  return (
		<section className={`hero ${data.centered ? "hero__centered"  : ""} ${data.background ? "hero__background"  : ""}`}>
			<div className="header-spacer"></div>
      <div className="hero__blob" ref={animation} />
      <div className="hero__space" ref={animationDark} />
			<div className="hero__content">
				<div className="container">
					<span className="hero__tag tag">{data.title}</span>
				  <h1 className={`hero__title ${data.centered ? "hero__title--centered"  : ""}`}>{data.heading}</h1>
					<div
						className="hero__description margin-fix`"
						dangerouslySetInnerHTML={{ __html:data.content}}>
					</div>
          {data.formId && (
            <div className="hero__form">
              {data.formHeading && <h2 className="hero__form-heading">{data.formHeading}</h2>}
              <GravityFormForm
                id={data.formId}
                formData={AllGravityData()}
                lambda={process.env.GATSBY_LAMBDA_ENDPOINT}
                presetValues={{ input_6: data.title }}
              />
            </div>
          )}
				</div>
			</div>
		</section>
  )
}

export default Light
