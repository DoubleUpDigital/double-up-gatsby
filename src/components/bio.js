import React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import * as styles from "../templates/blog-post.module.scss"

const Bio = ({author}) => {

  return (
    <div className={`${styles.bio}`}>
      <div className="container container--medium-2">
        {author.node.userOptions && author.node.userOptions.teamMember.map((member, i) => (
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
