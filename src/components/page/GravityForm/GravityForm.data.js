module.exports = () => {
	return `
    sectionLabel
    heading
    content
    formId
    background {
      hasBackground
      lastComponent
      squiggleBottom
      squiggleTop
    }
    backgroundImage {
      gatsbyImage(
        placeholder: BLURRED
        layout: FULL_WIDTH
        formats: [AUTO, WEBP]
        outputPixelDensities: [1.5, 2]
        quality: 80
        width: 1920
      )
    }
	`
}
