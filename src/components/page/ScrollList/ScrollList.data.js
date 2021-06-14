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
						quality: 100
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
							width: 60
							quality: 100
							placeholder: BLURRED
							formats: [AUTO, WEBP]
						)
					}
				}
			}
			itemContent
		}
	`
}
