import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import "./GravityForm.scss"
import GravityFormForm from 'gatsby-gravityforms-component'
import { GatsbyImage } from "gatsby-plugin-image"

import Squiggle from "../../abstracts/Squiggle"

const GravityForm = data => {

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
    <>
      {(data.background.squiggleTop && data.background.hasBackground) && <Squiggle type={data.background.squiggleTop} />}
      <section className={`component gravityForm
        ${data.background.hasBackground ? 'component--with-background'  : ""}
        ${(data.background.squiggleTop && data.background.hasBackground) ? 'component--squiggleTop'  : ""}
        ${(data.background.squiggleBottom && data.background.hasBackground) ? 'component--squiggleBottom'  : ""}
        ${(data.background.lastComponent && data.background.hasBackground) ? 'component--last'  : ""}`}>
        {data.backgroundImage && (
          <div className="gravityForm__background-image">
            <GatsbyImage
              image={data.backgroundImage.gatsbyImage}
              alt="space background"
              />
          </div>
        )}
        <div className={`gravityForm__container container container--small`}>

          <div className="gravityForm__intro">
            <span className={`component__tag gravityForm__tag tag`}>{data.sectionLabel}</span>
            <h2 className="component__heading gravityForm__heading">{data.heading}</h2>
            <div className="component__content gravityForm__text">{data.content}</div>
          </div>

          <div className="gravityForm__form">
            <GravityFormForm
              id={data.formId}
              formData={AllGravityData()}
              lambda={process.env.GATSBY_LAMBDA_ENDPOINT}
              presetValues={{ input_11: data.title }}
            />
          </div>

        </div>
      </section>
      {(data.background.squiggleBottom && data.background.hasBackground) && <Squiggle type={data.background.squiggleBottom} />}
    </>
  )
}

export default GravityForm
