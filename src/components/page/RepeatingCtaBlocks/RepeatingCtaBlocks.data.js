module.exports = () => {
	return `
		ctaBlocks {
			button {
				target
				title
				url
			}
			heading
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
              width: 200
              height: 169
              transformOptions: {cropFocus: NORTH}
						)
					}
				}
			}
			content
		}
    background {
      hasBackground
      squiggleTop
      squiggleBottom
      lastComponent
    }
	`
}
