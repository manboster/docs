import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  description: "Your Personal Manbo Lobster!",

  themeConfig: {
    nav: [
      { text: "Documentation", link: "/docs" },
      { text: "Configuration", link: "/docs/configure" },
      {
        text: "Releases",
        link: "https://github.com/manboster/manboster/releases",
      },
    ],
  },
});
