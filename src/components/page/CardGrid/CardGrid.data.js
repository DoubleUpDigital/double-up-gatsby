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
							quality: 100
							placeholder: BLURRED
							formats: [AUTO, WEBP]
						)
					}
				}
			}
			cardContent
			cardColor
		}
	`
}
