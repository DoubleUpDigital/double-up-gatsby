module.exports = () => {
	return `
		sectionLabel
		heading
		cards {
			heading
			subheading
			icon {
				altText
				localFile {
					childImageSharp {
						gatsbyImageData(
							width: 78
							height: 78
							quality: 100
							placeholder: TRACED_SVG
							outputPixelDensities: [1.5, 2]
							formats: [AUTO, WEBP]
							transformOptions: {cropFocus: CENTER, fit: CONTAIN}
							backgroundColor: "rgba(0,0,0,0)"
						)
					}
				}
			}
			content
			color
		}
	`
}
