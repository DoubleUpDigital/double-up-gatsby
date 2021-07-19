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
    animation {
      localFile {
        absolutePath
        base
        publicURL
        relativePath
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
