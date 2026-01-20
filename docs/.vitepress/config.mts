import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "廖逸玲的学习网站",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '配置环境', link: '/note/1' },
          {text: '创建仓库', link: '/note/2' },
          {text: '网站上线',link: '/note/3'},
          {text: 'html',link: '/note/4'},
          {text: 'CSS',link: '/note/5'},
          {text:'hello kitty',link:'/hello kitty.heml'},
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite:{
    publicDir:'../public'
  }
})
