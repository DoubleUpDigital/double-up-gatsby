import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "../templates/blog-post.scss"

const Bio = ({author}) => {
  console.log(author)
  const featuredImage = author.node.userOptions.teamMember?.[0].featuredImage?.node.gatsbyImage
  const beanImage = author.node.userOptions.teamMember?.[0].teamMemberDetails?.beans?.singleImage?.gatsbyImage
  const authorImage = beanImage ? beanImage : featuredImage
  const imageType = beanImage ? "bean" : "circle"

  return (
    <div className="bio">
      <div className="container container--medium-2">
        {author.node.userOptions && author.node.userOptions.teamMember.map((member, i) => (
          <div className="bio__inner">
            <GatsbyImage
              image={authorImage}
              className={`bio__headshot bio__headshot--${imageType}`} />
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
