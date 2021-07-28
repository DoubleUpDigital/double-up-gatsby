import React from "react"
import { graphql, Link } from "gatsby"
import "../components/hero/Light/light.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lottie from "lottie-react"
import { StaticImage } from "gatsby-plugin-image"
import animationData from "/content/assets/blob-top-right.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404" />
      <section className="hero hero__centered">
  			<div className="header-spacer"></div>
        <Lottie
          className="hero__blob"
          animationData={animationData}
          renderer="svg" />
        <StaticImage
          className="hero__space"
          src="../ui/space-on-dark.png"
          placeholder="blurred"
          quality="100"
          layout="fullWidth"
          alt=""
          style={{position: "absolute"}} />
  			<div className="hero__content">
  				<div className="container">
  					<span className="hero__tag tag">oops</span>
  				  <h1 className="hero__title">404</h1>
  					<div className="hero__description error__description margin-fix">
              Look's like you've taken a wrong turn somewhere...<br/>
              Don't worry, I'll take you back to safety.<br/>
  					</div>
            <Link to="/" className="callout__buttons_button button button--inverted">
              <span className="button__text">
                Back to Safety
              </span>
              <span className="button__orb">
                <FontAwesomeIcon icon={faLongArrowRight} />
              </span>
            </Link>
  				</div>
  			</div>
  		</section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
