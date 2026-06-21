---
layout: home

hero:
  name: Manboster
  text: 你的曼波虾头小助手！
  tagline: Manboster is a personal AI Agent like Hermes Agent, OpenClaw, PicoClaw, Memoh and IronClaw. Apart from claws, we forged it with a shell more secure. So it features pluggable tool call, built-in zero trust gatekeeper, Hachimi guard model and more than you think.
  actions:
    - theme: brand
      text: 快速开始
      link: /zh-cn/docs/quickstart.md
    - theme: alt
      text: 文档
      link: /zh-cn/docs/index.md
    - theme: alt
      text: GitHub
      link: https://github.com/manboster/manboster
features:
  - icon: ⚡️
    title: 快速又敏捷
    details: Thanks to Golang, Manboster is born with genes that is fast and multithreaded. Also, it consumes only 40MB memory in your machine when idle.
  - icon: 🔐
    title: 安全
    details: Manboster features built in Zero Trust design. If you disallow the LLM to do anything, it won't do anything due to the limitation of Gatekeeper.
  - icon: ⚖️
    title: 内置守卫
    details: Manboster 内置 Hachimi（哈吉米），一个通常跑在本地的小模型。你可以让 Hachimi 帮你处理模型的工具调用请求。除非是可疑或危险情况，Hachimi 不会来打扰你。  You can handle all requests to Hachimi, it will help you handle LLM's tool call requests properly unless it's unsure or unsafe.
  - icon: 🔧
    title: Easy to use
    details: Out of the box, only one executable file. Just download and click to start. Also, we are working on websocket-based web panel, stay tuned!
---
