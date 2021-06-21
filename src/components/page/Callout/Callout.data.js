module.exports = () => {
	return `
		sectionLabel
		heading
		content
		buttons {
			button {
				target
				title
				url
			}
		}
    leftWithGraphic
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
            width: 605
            height: 676
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
