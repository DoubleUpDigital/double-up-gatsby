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
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
	`
}
