/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import * as styles from "../templates/blog-post.module.scss"

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpPost {
        author {
          node {
            userOptions {
              teamMember {
                ... on WpTeamMember {
                  content
                  title
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
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
    <div className={`${styles.bio}`}>
      <div className="container container--medium-2">
        {author.author.node.userOptions.teamMember.map((member, i) => (
          <div className={`${styles.bio__inner}`}>
            <GatsbyImage
                image={member.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                className={`${styles.bio__headshot}`} />
            <div className={`${styles.bio__content}`}>
              <div className={`${styles.bio__name}`}>{member.title}</div>
              <div dangerouslySetInnerHTML={{__html: member.content}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bio
