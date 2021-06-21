module.exports = () => {
	return `
		heading
		content
		graphic {
			altText
			localFile {
				childImageSharp {
					gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            quality: 80
            formats: [AUTO, WEBP]
            outputPixelDensities: [1.5, 2]
            width: 972
            height: 567
            transformOptions: {cropFocus: NORTH}
					)
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
