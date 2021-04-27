module.exports = () => {
	return `
		sectionLabel
		heading
		content
		projects {
			... on WpProject {
                title
				uri
			}
		}
	`
}