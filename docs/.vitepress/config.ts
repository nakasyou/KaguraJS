import { defineConfig } from 'vitepress'
import generateSideber from "./generate-sidebar"

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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: "/KaguraJS",
})
