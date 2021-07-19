module.exports = () => {
	return `
		sectionLabel
		heading
		content
    animation {
      localFile {
        absolutePath
        base
        publicURL
        relativePath
      }
    }
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
              layout: FIXED
              placeholder: TRACED_SVG
              quality: 100
              formats: [AUTO, WEBP]
              outputPixelDensities: [1.5, 2]
              width: 40
              height: 40
						)
					}
				}
			}
			itemContent
		}
	`
}
