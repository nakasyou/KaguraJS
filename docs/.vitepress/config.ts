import { defineConfig } from 'vitepress'
import generateSideber from "./generate-sidebar"
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KaguraJS",
  description: "KaguraJS's document site.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'API', link: '/api/modules' }
    ],

    sidebar: generateSideber(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/KaguraJS' }
    ]
  },
  base: "/KaguraJS",
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
})
