module.exports = () => {
	return `
		sectionLabel
		heading
		content
		projects {
			... on WpProject {
        title
				uri
				projectDetails {
					platform
					whatWeDid
					screenshots {
						fullPageDesktop {
							altText
							localFile {
								childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										placeholder: TRACED_SVG
										quality: 80
										formats: [AUTO, WEBP]
										outputPixelDensities: [1.5, 2]
										width: 972
										height: 552
										transformOptions: {cropFocus: NORTH}
					        )
								}
							}
						}
						primaryMobile {
							altText
							localFile {
								childImageSharp {
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	`
}
