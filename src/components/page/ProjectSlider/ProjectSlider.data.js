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
									gatsbyImageData
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