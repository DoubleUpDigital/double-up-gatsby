import React from 'react'
import { graphql } from 'gatsby'
import { BuilderComponent } from '@builder.io/react';

import Layout from "../../src/components/layout"


const PageBuilderTemplate = ({ data }) => {
  const models = data?.allBuilderModels;
  const page = models.page?.content;

  return (
    <Layout>
      <BuilderComponent name="page" content={page} />
    </Layout>
  )
}

export default PageBuilderTemplate

export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }) {
        content
      }
    }
  }
`;
