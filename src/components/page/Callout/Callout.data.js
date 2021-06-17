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
            quality: 100
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
