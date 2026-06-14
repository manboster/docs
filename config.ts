import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  description: "Your Personal Manbo Lobster!",

  themeConfig: {
    nav: [
      { text: "Documentation", link: "/docs" },
      { text: "Configuration", link: "/docs/configure" },
      { text: "Contribute", link: "/docs/contribute" },
      {
        text: "Releases",
        link: "https://github.com/manboster/manboster/releases",
      },
    ],
    sidebar: [
      {
        text: "Documentation",
        link: "/docs",
        items: [
          { text: "Why Manboster?", link: "/docs/why" },
          { text: "Quickstart", link: "/docs/quickstart" },
          { text: "Run in a container", link: "/docs/container" },
          { text: "Introducing Hachimi", link: "/docs/hachimi" },
          { text: "Introducing Gatekeeper", link: "/docs/gatekeeper" },
        ],
      },
    ],
  },
});
