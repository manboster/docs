# Why Manboster?

## TL;DR

If you are seeking for an AI agent that is both light and safer than other agents, try Manboster.

If you want more features (like skills, MCP or other features) or more compatible chat providers, I'm sorry that Manboster is currently meet your standard but we are working on improving it and sorry again for the inconvenience.

If you are finding something for Business(ToB), I'm afraid that Manboster is designed for individual or small team use, not for big companies.

## Reasons to choose manboster

Here are reasons you choose Manboster:

## 1. Fast & Light

Manboster is made with [Golang](https://go.dev/). Golang is a language built for cloud-native, its code can be complied into machine code, saving the time of parsing.

Compared to competitor products like [OpenClaw](https://github.com/openclaw/openclaw), [Cahciua](https://github.com/menci/Cahciua) and [Cybergroupmate](https://github.com/archeb/cybergroupmate), which are written in JavaScript(TypeScript), or [Astrbot](https://github.com/AstrBotDevs/AstrBot), which is written in Python, we have the advantage that is light and fast.

OpenClaw (at least the older version) is single-threaded due to the limitation of Node.js, Manboster, thankfully, is born with genes multithreaded thanks to Golang's concurrency features.

When Manboster is idle, it consumes 40～50MB memory on a MacBook Air M4. When a Hachimi model was loaded (default model configuration with x-high context), it consumes 1GB~1.1GB memory on a MacBook Air M4. After Hachimi model was released, it comes back to idle memory occupation.

## 2. Secure, Guard Inside

Manboster features Zero Trust design, we wouldn't let cloud LLMs destroy your computer. 

For this reference, just read introduction to [Hachimi](/docs/hachimi.md)(A small guard model running to judge cloud LLM's behaviours) and [Gatekeeper](/docs/gatekeeper.md)(The module controls the tool call request).

Compared to competitor products, Hachimi is the most innovative point in all AI agents. But remind that Hachimi reduces the cost of decision and takes effect in reducing cloud LLM imagination, but it could not tackle advanced and complex prompt engineering so do not trust it absolutely.

## 3. Easy to use

Out of the box, only a single executable file, no annoying dependencies, all platforms available.

Just [go to releases](https://github.com/manboster/manboster/releases), download it and then double-click it. It will open a pretty TUI(Terminal User Interface) window, helping you to onboard by Manboster Configuration Wizard.

![](/docs/assets/onboard.png)

Also, you can configure Manboster in TUI with `./manboster config`.

If you want to uninstall it, just move it to trash. If you want to update it, just download a newer version and replace the older version. If you want to clean everything, just delete `~/.manboster` completely.

## 4. Pluggable Tools

Manboster built with a plenty of useful built-in tools. You can enable or disable them easily.

If you don't select any tool, you can regard it as your AI chatbot, as the tools adding on Manboster, it grows claws and is able to help you finish more tasks.

## 5. Compatible with skills and MCP

We are working on this so this is not the key feature of Manboster.

To be continued...
