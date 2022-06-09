module.exports = () => {
	return `
    sectionLabel
    heading
    content
    charts {
      title
      chart {
        gatsbyImage(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          outputPixelDensities: [1.5, 2]
          quality: 100
          width: 1170
        )
      }
    }
    stats {
      heading
      dataPoints {
        icon {
          gatsbyImage(
            placeholder: BLURRED
            layout: CONSTRAINED
            formats: [AUTO, WEBP]
            outputPixelDensities: [1.5, 2]
            quality: 100
            width: 60
          )
          localFile {
            publicURL
            extension
          }
        }
        data
        label
      }
    }
    background {
      hasBackground
      lastComponent
      squiggleBottom
      squiggleTop
    }
	`
}
