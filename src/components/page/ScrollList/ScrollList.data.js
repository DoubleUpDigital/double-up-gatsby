module.exports = () => {
	return `
		sectionLabel
		heading
		content
		spaceGraphic {
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
            height: 992
            transformOptions: {cropFocus: NORTH}
					)
				}
			}
		}
		scrollListItems {
			itemTitle
			itemIcon {
				localFile {
					childImageSharp {
						gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              quality: 80
              formats: [AUTO, WEBP]
              outputPixelDensities: [1.5, 2]
              width: 60
              height: 60
              transformOptions: {cropFocus: NORTH}
						)
					}
				}
			}
			itemContent
		}
	`
}
