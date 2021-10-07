module.exports = () => {
	return `
		sectionLabel
		heading
    teamMembers {
      ... on WpTeamMember {
        teamMemberDetails {
          email
          phoneNumber
          title
        }
        title
        uri
        content
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  quality: 80
                  formats: [AUTO, WEBP]
                  outputPixelDensities: [1.5, 2]
                  width: 231
                  height: 231
                  transformOptions: {cropFocus: ATTENTION}
                )
              }
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
