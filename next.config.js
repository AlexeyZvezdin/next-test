// next.config.js
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
  compress: true,
  poweredByHeader: false,
});
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});
