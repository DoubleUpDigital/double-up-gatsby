module.exports = () => {
	return `
		sectionLabel
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
            width: 972
            height: 659
            transformOptions: {cropFocus: NORTH}
          )
        }
      }
    }
		cards {
			heading
			subheading
			content
			color
		}
    background {
      hasBackground
      squiggleTop
      squiggleBottom
    }
	`
}
