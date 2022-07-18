module.exports = () => {
	return `
		sectionLabel
		heading
    teamMembers {
      ... on WpTeamMember {
        title
        uri
        teamMemberDetails {
          firstName
          title
          beans {
            archiveImage {
              gatsbyImage(
                width: 270
                quality: 80
                outputPixelDensities: [1.5, 2]
                formats: [AUTO, WEBP]
                fit: CONTAIN
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
    background {
      hasBackground
      squiggleTop
      squiggleBottom
      lastComponent
    }
	`
}
