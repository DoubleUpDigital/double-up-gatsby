module.exports = () => {
	return `
		sectionLabel
		heading
		content
		link {
			target
			title
			url
		}
		listItems {
			itemText
			itemIcon {
				localFile {
					childImageSharp {
						gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              quality: 80
              formats: [AUTO, WEBP]
              outputPixelDensities: [1.5, 2]
              width: 40
              height: 40
              transformOptions: {cropFocus: NORTH}
						)
					}
				}
			}
		}
	`
}
