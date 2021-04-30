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
						primaryDesktop {
							altText
							localFile {
								childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										placeholder: TRACED_SVG
										quality: 100
										formats: [AUTO, WEBP]
										outputPixelDensities: 2
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