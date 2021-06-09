module.exports = () => {
	return `
		heading
		content
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
	`
}
