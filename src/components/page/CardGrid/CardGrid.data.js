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
				altText
				localFile {
					childImageSharp {
						gatsbyImageData(
							height: 120
							quality: 100
							placeholder: TRACED_SVG
              outputPixelDensities: [1.5, 2]
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
