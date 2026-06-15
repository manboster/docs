import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  description: "你的曼波虾头小助手！",

  themeConfig: {
    nav: [
      { text: "文档", link: "/zh-cn/docs" },
      { text: "配置", link: "/zh-cn/docs/configure" },
      { text: "提交贡献(英文)", link: "/docs/contribute" },
      { text: "下载", link: "https://github.com/manboster/manboster/releases" },
    ],
    sidebar: [
      {
        text: "Manboster 用户文档",
        link: "/zh-cn/docs",
        items: [
          { text: "为什么选择 Manboster ?", link: "/zh-cn/docs/why" },
          { text: "快速开始", link: "/zh-cn/docs/quickstart" },
          { text: "在容器里运行 Manboster", link: "/zh-cn/docs/container" },
          { text: "Hachimi(哈吉米)简介", link: "/zh-cn/docs/hachimi" },
          { text: "Gatekeeper简介", link: "/zh-cn/docs/gatekeeper" },
        ],
      },
    ],
  },
});
