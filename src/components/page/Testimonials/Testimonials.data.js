module.exports = () => {
	return `
		heading
    selectedTestimonials {
      ... on WpTestimonial {
        title
        content
      }
    }
    background {
      hasBackground
      squiggleTop
      squiggleBottom
      lastComponent
    }
	`
}
