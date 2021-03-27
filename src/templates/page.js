import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  let data

  // ### DATA VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  
  const componentsArray = data.hero.hero || []
  const components = componentsArray.map(component => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    }
  })
  const invertHeader = data.header_options.invertHeader
  
  return (
    <Layout
      invertHeader={invertHeader || false}>
      <SEO title={data.seo.title} description={data.seo.metaDesc} />
      {components.map((component, index) => {
        // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
        return <div>Error: The component {component.name} was not found</div>
      })}
    </Layout>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###