import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Manboster",
  description: "Your Personal Manbo Lobster!",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    "zh-cn": {
      label: "简体中文",
      lang: "zh-cn",
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    footer: {
      message:
        'Manboster was released under <a href="https://github.com/manboster/manboster/blob/master/LICENSE" target="_blank">Apache 2.0</a> License',
      copyright:
        'Powered by <a href="https://github.com/manboster/manboster/contributors" target="_blank">Manboster Contributors</a> © 2026',
    },
  },
});
