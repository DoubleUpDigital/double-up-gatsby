module.exports = () => {
	return `
		latestTitle
		mostPopularTitle
		mostPopularPosts {
          ... on WpPost {
            title
            uri
		        categories {
              nodes {
                name
                categoryOptions {
                  color
                }
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: TRACED_SVG
                      quality: 80
                      formats: [AUTO, WEBP]
                      outputPixelDensities: [1.5, 2]
                      width: 140
                      height: 100
                      transformOptions: {cropFocus: NORTH}
                    )
                  }
                }
              }
            }
          }
        }
	`
}
