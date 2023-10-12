const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  docsRepositoryBase: "https://github.com/brunojppb/austria-expat-tips/tree/master/pages"
})
