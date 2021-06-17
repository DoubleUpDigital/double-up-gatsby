module.exports = () => {
	return `
		sectionLabel
		heading
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
