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
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  locales: {
    root: i18n.en_US
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
