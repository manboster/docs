# Hachimi（哈吉米）简介

> [!NOTE]
> 此翻译部分内容由 Kimi K2.6 提供，如果有任何疏忽和遗漏，欢迎[向我们提交PR](https://github.com/manboster/docs/pull/new)进行修改！

## 什么是"Hachimi"？

Hachimi（哈吉米）是一个主要运行在**设备端**的防护模型（你也可以更换提供商；如果选择 "gguf"，则会使用 `llama.cpp` 和 FFI 技术在本地运行 Hachimi）。

你可以把 Hachimi 理解为云端大语言模型的"法官"——它在本地执行前先进行判断。它能有效降低单一模型产生的幻觉问题，但无法应对高级且复杂的提示词工程攻击。

## 如何开启？

在安装向导中，系统会询问你是否要启用 Hachimi。如果当时没有启用，你也可以稍后通过 `./manboster config` 管理器（`配置 > Hachimi`）来开启。

## 系统要求

如果运行默认模型 `Qwen3 Guard Gen 0.6B` 并选择 `medium`（中等）上下文，你的机器至少需要 **768MB** 可用内存。建议预留 **1GB** 以上可用内存。

Hachimi 模型的内存占用取决于运行模型的大小和上下文长度，你可以将模型本身的占用估算为 **文件大小的 1.2 倍**。

不同上下文长度的内存占用如下表所示：

| 上下文长度 | 内存占用（平均） |
|-----------|----------------|
| Low（1k tokens） | 150MB |
| Medium（2k tokens） | 250MB |
| High（4k tokens） | 450MB |
| x-High（8k tokens） | 850MB |

上下文长度越长，Hachimi 能够理解的内容就越多。如果评估消息过长（超过上下文长度限制），则会回退到人工处理。

例如，你正在使用 `Qwen3 Guard Gen 0.6B`，模型文件大小为 `400MB`，并选择了 `medium` 上下文长度。

最终的内存占用为：

```
400MB * 1.2 + 250MB = 480 + 250 = 730MB
```

> [!WARNING]
> 这是 Hachimi 所需的**最低**内存大小。我们强烈建议你预留更多空间，以避免因内存不足（OOM）导致系统发送 SIGKILL 信号终止进程。

## Hachimi 的角色

> [!WARNING]
> Hachimi 帮助你判断云端大语言模型的工具调用请求是否安全。它确实有助于降低决策成本，让工作流更加顺畅。然而，受限于 Transformer 大语言模型的能力，你不能将所有事情都绝对地交给它处理。

在工具选择时，你可以选择 `由 Hachimi 处理` 或 `全部交由 Hachimi 处理 1 小时` 来激活 Hachimi。你也可以发送 `/reset` 命令来重置工具调用处理状态。

当 Hachimi 认为某个请求可疑或不安全时，gatekeeper 将挂起该请求流程，请用户选择允许或拒绝。

此外，我们使用了**懒加载**技术来加载 Hachimi。如果一段时间内没有请求（目前设置为 15 分钟），系统会自动将其卸载。

## 故障排除

如果由于网络连接不佳无法下载模型，请手动下载 `https://huggingface.co/QuantFactory/Qwen3Guard-Gen-0.6B-GGUF/resolve/main/Qwen3Guard-Gen-0.6B.Q4_K_M.gguf?download=true`，或使用 `modelscope.cn` 等镜像站下载，并保存到 `~/.manboster/hachimi/models/Qwen3Guard-Gen-0.6B.Q4_K_M.gguf`（如果你使用的是默认模型）。

如果你使用其他模型，只需将它们下载到 `~/.manboster/hachimi/models/` 目录下，保持对应文件名，然后启动应用即可。

如果由于网络连接不佳无法下载 llama.cpp，请前往 GitHub 或其镜像站 [llama.cpp Releases](https://github.com/ggml-org/llama.cpp/releases) 下载适合你架构的文件，并复制到 `~/.manboster/hachimi/llama.cpp/` 目录下。

## 自定义配置（面向高级用户）

你需要一个 GGUF 格式的模型文件，可以从 [Hugging Face](https://huggingface.co/) 获取。

在配置提示界面，直接跳过手动配置，将该 GGUF 文件的 URL 填入表单。如果本地没有可用模型，应用启动时会静默下载。
