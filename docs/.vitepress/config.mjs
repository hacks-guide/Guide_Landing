/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import * as i18n from './i18n'

export default defineConfig({
  title: "Hacks Guide",
  description: "Hacks Guide Listings",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }],
         ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0R9QL9R7B8' }],
         ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-0R9QL9R7B8');`]
  ],
  locales: {
    root: i18n.en_US
  },
  sitemap: {
    hostname: 'https://hacks.guide'
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hacks-guide' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
