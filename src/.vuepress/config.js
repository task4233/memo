module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'Note',
      description: 'Take it easy. But not lazy.'
    }
  },
  base: '/note/',
  dest: 'docs',
  plugins: [
    '@vuepress/blog',
    'latex',
    '@vuepress/google-analytics',
    {
      ga: 'UA-134364564-2',
    }
  ],
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth: 2,
    nav: [
      { text: 'About'        , link: '/about.html' },
      { text: 'Articles'       , link: '/list.html' },
      { text: 'Chukapi-Fun-Art', link: '/chukapi_fun_art.html' },
    ],
    lastUpdated: true,
    search: true,
  }
}
