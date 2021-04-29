module.exports = () => {
	return `
		sectionLabel
		heading
		button {
			target
			title
			url
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
		spaceBackground
	`
}
