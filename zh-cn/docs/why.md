# 为什么选择 Manboster？

> [!NOTE]
> 此翻译部分内容由 Kimi K2.6 提供，如果有任何疏忽和遗漏，欢迎[向我们提交PR](https://github.com/manboster/docs/pull/new)进行修改！

## 太长不看（TL;DR）

如果你正在寻找一个**既轻量又比其他 AI Agent 更安全**的 AI Agent，来试试 Manboster 吧。

如果你想要更多功能（如技能、MCP 或其他功能）或更多兼容的聊天提供商，非常抱歉， Manboster 目前还达不到你的标准，但我们正在努力改进它，再次为我们带来的不便致歉！

如果你在寻找面向企业（ToB）的解决方案， Manboster 是为个人或小团队设计的，它恐怕并不适合在大公司进行部署使用。

## 选择 Manboster 的理由

以下是选择 Manboster 的理由：

## 1. 快速且轻量

Manboster 使用 [Golang](https://go.dev/) 构建。Golang 是一门为云原生而生的语言，其代码可以编译为机器码，省去了运行时解析的时间。

我们与竞品如 [OpenClaw](https://github.com/openclaw/openclaw)、[Cahciua](https://github.com/menci/Cahciua) 和 [Cybergroupmate](https://github.com/archeb/cybergroupmate)（使用 JavaScript/TypeScript 编写），或 [Astrbot](https://github.com/AstrBotDevs/AstrBot)（使用 Python 编写）相比，有着**轻量且快速**的优势。

OpenClaw（至少旧版本）由于 Node.js 的限制是单线程的，而 Manboster 所幸得益于 Golang 的并发特性，天生自带多线程基因。

Manboster 在空闲时，在 MacBook Air M4 上占用约 40～50MB 内存。当加载 Hachimi 模型时（默认模型配置 + x-high 上下文），在 MacBook Air M4 上占用约 1GB～1.1GB 内存。Hachimi 模型释放后，内存占用会回到空闲水平。

## 2. 安全，内置防护

Manboster 采用**零信任设计**，我们不会让云端大语言模型破坏你的电脑。

关于这一点，请参阅 [Hachimi](/zh-cn/docs/hachimi.md)（一个运行在本地、用于评判云端 LLM 行为的小型防护模型）和 [Gatekeeper](/zh-cn/docs/gatekeeper.md)（控制工具调用请求的模块）的介绍。

与竞品相比，Hachimi 是所有 AI 代理中最具创新性的亮点。但请谨记：Hachimi 能够降低决策成本并有效减少云端 LLM 的幻觉，但它**无法应对高级且复杂的提示工程攻击**，因此请不要绝对信任它。

## 3. 易于使用

开箱即用，只有一个可执行文件，没有烦人的依赖，全平台可用。

只需[前往 Releases 页面](https://github.com/manboster/manboster/releases)，下载后双击即可。它会打开一个精美的 TUI（终端用户界面）窗口，通过 Manboster 配置向导帮助你完成上手。

![](/zh-cn/docs/assets/onboard.png)

此外，你也可以通过 `./manboster config` 在 TUI 中进行配置。

想要卸载？直接移到垃圾桶即可。想要更新？下载新版本替换旧版本即可。想要清理所有数据？直接删除 `~/.manboster` 即可。

## 4. 可插拔工具

Manboster 内置了大量实用的工具，你可以轻松启用或禁用它们。

如果你没有选择任何工具，你可以把它当作普通的 AI 聊天机器人使用；随着工具的添加，Manboster 会长出爪子，帮助你完成更多任务。

## 5. 古法编程

在 AI 时代，vibe coding（氛围编程，AI 辅助编程）几乎无处不在。然而，Manboster 的核心安全模块使用的是古法编程撰写的。既然用了AI，那么 AI 都做了什么呢？它们根据指令填充了辅助函数，协助人类审查了安全架构，或是增强了 Manboster 的系统提示词。我们始终确保安全性是 Manboster 的首要重点，因此，为了避免 AI 产生“幻觉”而引发风险，我们没有使用 AI 来进行 vibe coding。

## 6. 兼容技能与 MCP

我们正在开发这项功能，因此它目前还不是 Manboster 的核心特性。

未完待续……
