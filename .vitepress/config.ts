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
  themeConfig: {},
});
