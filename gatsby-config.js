module.exports = {
  siteMetadata: {
    title: "Dotik",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/post" }],
        excludePaths: [{ regex: "^/blog.+react$" }],
        height: 3,
        prependToBody: false,
        color: `#FF6A3C`,
        footerHeight: 500,
        headerHeight: 0,
      }
    },
    // { need traking id important!
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    {
    resolve: 'gatsby-plugin-react-svg',
    options: {
        rule: {
          include: /assets/
        }
      }
    },
    //"gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    
  ],
};
