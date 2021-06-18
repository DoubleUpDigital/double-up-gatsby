module.exports = () => {
	return `
    tag
		heading
    content
		listItems {
			itemText
			itemIcon {
				localFile {
					childImageSharp {
						gatsbyImageData(
							width: 40
							quality: 100
							placeholder: BLURRED
							formats: [AUTO, WEBP]
						)
					}
				}
			}
		}
	`
}
