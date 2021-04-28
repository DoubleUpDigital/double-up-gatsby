module.exports = () => {
	return `
		sectionLabel
		heading
		button {
			target
			title
			url
		}
		listItems {
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
