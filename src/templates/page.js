import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  let data

  // ### DATA VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###

  const heroComponentsArray = data.hero.hero || []
  const pageComponentsArray = data.components.components || []
  const heroComponents = heroComponentsArray.map(component => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    }
  })
  const pageComponents = pageComponentsArray.map(component => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    }
  })
  const invertHeader = data.page_options.invertHeader
  const invertPage = data.page_options.invertPage

  return (
    <Layout
      invertHeader={invertHeader || false}
      invertPage={invertPage || false}>
      <SEO title={data.seo.title} description={data.seo.metaDesc} />
      {heroComponents.map((component, index) => {
        // ### HERO COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
        return <div>Error: The component {component.name} was not found</div>
      })}
      {pageComponents.map((component, index) => {
        // ### PAGE COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
        return <div>Error: The component {component.name} was not found</div>
      })}
    </Layout>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###
