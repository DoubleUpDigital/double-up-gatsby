module.exports = () => {
	return `
		heading
    selectedTestimonials {
      ... on WpTestimonial {
        title
        content
      }
    }
	`
}
