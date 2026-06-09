import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  description: "你的曼波虾头小助手！",

  themeConfig: {
    nav: [
      { text: "文档", link: "/zh-cn/docs" },
      { text: "配置", link: "/zh-cn/docs/configure" },
      { text: "下载", link: "https://github.com/manboster/manboster/releases" },
    ],
  },
});
