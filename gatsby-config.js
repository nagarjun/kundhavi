module.exports = {
  siteMetadata: {
    title: 'Kundhavi Nagaraj',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '500', '700'],
              subsets: ['latin', 'latin-ext'],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
};
