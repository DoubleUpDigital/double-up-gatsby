import React from 'react'
import "./projectGrid.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectGrid = data => {
  const projects = useStaticQuery(graphql `
    {
      allWpProject(sort: {fields: date, order: DESC}) {
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
                      quality: 80
                      layout: CONSTRAINED
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
      <div className="container container--wide">
        <div className="projectGrid__grid">
          {projects.allWpProject.nodes.map((project,i) => (
            <div className="projectGrid__project" key={'project_' + i}>
              <Link to={project.uri} className="projectGrid__project-block" style={{
                backgroundColor: project.projectDetails.brandColor
                }}>
                <div className="projectGrid__project-frame">
                  {project.projectDetails.screenshots.fullPageDesktop && <GatsbyImage
                    className="projectGrid__project-image"
                    image={project.projectDetails.screenshots.fullPageDesktop.localFile.childImageSharp.gatsbyImageData} />}
                </div>
              </Link>
              <h3 className="projectGrid__project-title">
                <Link to={project.uri} className="projectGrid__project-title-link">
                  {project.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default ProjectGrid
