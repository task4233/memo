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
  head: [
    ['link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
      }
    ],
    ['link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true
    },
    config: (md) => {
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-task-lists'))
      md.options.linkify = true
    }
  },
  themeConfig: {
    nav: [
      { text: 'Todo'           , link: '/todo.html' },
      { text: 'Chukapi-Fun-Art', link: '/chukapi_fun_art.html' },
      { text: 'Articles'       , link: '/list.html' }
    ],
    search: true,
  }
}
