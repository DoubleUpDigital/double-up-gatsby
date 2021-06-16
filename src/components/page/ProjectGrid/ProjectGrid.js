import React from 'react'
import "./projectGrid.scss"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const ProjectGrid = data => {
  const projects = useStaticQuery(graphql `
    {
      allWpProject {
        nodes {
          title
          uri
          projectDetails {
            brandColor
            screenshots {
              fullPageDesktop {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 365
                      placeholder: BLURRED
                      quality: 8
                      layout: FULL_WIDTH
                      outputPixelDensities: [1.5, 2]
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }

    `)
  return (
    <section className="component projectGrid">
      <div className="container">
        <div className="projectGrid__grid">
          {projects.allWpProject.nodes.map((project,i) => (
            <div className="projectGrid__project" key={'project_' + i}>
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default ProjectGrid
