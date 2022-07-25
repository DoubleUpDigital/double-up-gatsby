import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "../templates/blog-post.scss"

const Bio = ({author}) => {

  return (
    <div className="bio">
      <div className="container container--medium-2">
        {author.node.userOptions && author.node.userOptions.teamMember.map((member, i) => (
          <div className="bio__inner">
            <GatsbyImage
              image={member.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
              className="bio__headshot" />
            <div className="bio__content">
              <div className="bio__name">{member.title}</div>
              <div dangerouslySetInnerHTML={{__html: member.content}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bio
