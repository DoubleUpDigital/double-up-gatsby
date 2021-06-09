module.exports = () => {
	return `
		heading
		content
		ctaLink {
			title
			url
			target
		}
		graphic {
			altText
			localFile {
				childImageSharp {
					gatsbyImageData(
						quality: 100
						placeholder: TRACED_SVG
						outputPixelDensities: [1.5, 2]
						formats: [AUTO, WEBP]
						transformOptions: {cropFocus: CENTER, fit: CONTAIN}
					)
				}
			}
		}
	`
}
