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
							quality: 100
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
    }
	`
}
