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
							height: 128
							quality: 100
							placeholder: TRACED_SVG
							formats: [AUTO, WEBP]
							transformOptions: {cropFocus: CENTER, fit: CONTAIN}
							backgroundColor: "rgba(0,0,0,0)"
						)
					}
				}
			}
			cardContent
			cardColor
		}
	`
}
