import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  let data
  console.log(pageProps.data)
  // ### DATA VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  const componentsArray = data.hero.hero || []
  const components = componentsArray.map(component => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    }
  })
  return (
    <Layout>
      {components.map((component, index) => {
        // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
        return <div>Error: The component {component.name} was not found</div>
      })}
    </Layout>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###