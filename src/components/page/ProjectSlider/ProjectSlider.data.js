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
							localFile {
								childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										placeholder: TRACED_SVG
										quality: 100
										formats: AUTO
										outputPixelDensities: 2
										width: 972
					                )
								}
							}
						}
						primaryMobile {
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