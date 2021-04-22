module.exports = () => {
	return `
		sectionLabel
		heading
		content
		cards {
			cardLink {
				target
				title
				url
			}
			cardTitle
			cardImage {
				localFile {
					childImageSharp {
						gatsbyImageData(
							width: 150
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
			cardContent
			cardColor
		}
	`
}
