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
