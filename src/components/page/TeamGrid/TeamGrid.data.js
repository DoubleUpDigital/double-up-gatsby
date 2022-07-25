module.exports = () => {
	return `
		sectionLabel
		heading
    teamMembers {
      ... on WpTeamMember {
        title
        uri
        id
        teamMemberDetails {
          firstName
          title
          beans {
            type
            archiveImage {
              gatsbyImage(
                width: 270
                quality: 80
                outputPixelDensities: [1.5, 2]
                formats: [AUTO, WEBP]
                fit: CONTAIN
                placeholder: BLURRED
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
