/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://doubleup.digital`,
  },
  plugins: [

    // Tracking Scripts
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-MCV5DT",
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "990588300990766",
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-leadfeeder`,
    //   options: {
    //     key: "v1_kn9Eq4RLqYJ8RlvP",
    //   },
    // },

    // Source Plugins
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL,
        auth: {
          htaccess: {
            username: process.env.WP_BASIC_AUTH_USERNAME,
            password: process.env.WP_BASIC_AUTH_PASSWORD,
          },
        },
        html: {
          useGatsbyImage: true,
          imageMaxWidth: 1170,
          fallbackImageMaxWidth: 1170,
          imageQuality: 80,
          createStaticFiles: true,
        },
        production: {
          allow404Images: true,
          hardCacheMediaFiles: true,
        },
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
        schema: {
          timeout: 600000
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 100,
            },
          },
        },
      },
    },

    {
      resolve: 'gatsby-source-gravityforms',
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: process.env.WP_URL,
        basicAuth: {
          username: process.env.WP_BASIC_AUTH_USERNAME,
          password: process.env.WP_BASIC_AUTH_PASSWORD
        },
        // Gravity Forms API
        api: {
          key: process.env.GATSBY_CONSUMER_KEY,
          secret: process.env.GATSBY_CONSUMER_SECRET,
        },
        // Set to true to enable selfsigned certs in development mode
        allowSelfSigned: false,
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Fix for Font Awesome CSS loading
    `gatsby-plugin-fontawesome-css`,

    // Plugins to assist in bundle size/page speed
    `gatsby-plugin-preact`,

    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Double Up Digital`,
        short_name: `Double Up Digital`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#04063f`,
        display: `minimal-ui`,
        icon: `content/assets/site-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/animation-homepage-hero/*": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ],
          "/ui/*": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
          ]
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-sitemap`,
//    {
//      resolve: `gatsby-plugin-yoast-sitemap`,
//      options: {
//        baseUrl: process.env.WP_URL,
//        gatsbyUrl: process.env.GATSBY_URL,
//      },
 //   },
  ],
}
