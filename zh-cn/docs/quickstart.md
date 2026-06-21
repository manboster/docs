# 快速开始

> [!WARNING]
> 提示：Manboster 目前正处于不稳定阶段并且我们正在给它增加功能中，并不建议您生产使用，建议等待2026年9月的 `v1.0.0` 发布后再尝试生产端使用。 It's not production-ready until `v1.0.0` releases in about September 2026.

## 你是 Go 开发者吗？

如果你已经安装了 [Go 语言环境](https://go.dev/)，只需一行命令就能轻松下载并安装 Manboster：

```shell
go install github.com/manboster/manboster/cmd/manboster@latest

```

If you don't know what's this, go ahead.

## 你是苹果 Mac 用户吗？

如果你使用的是搭载 Apple Silicon（M 系列芯片）的 Mac，感谢 [Lockinwize Lolite](https://github.com/mzwing) 的贡献，你可以通过下面这个 brew tap 来安装 manboster。

只需执行以下 Homebrew 命令即可（前提是你得先装好 Homebrew）：

```shell
brew tap MZWNET/tap
brew install MZWNET/tap/manboster

```

## 你是 AOSC OS 用户吗？

如果您正在使用 [AOSC OS](https://aosc.io/)（有时也称为 Anthon OS, 安同OS），我们很高兴地告诉您，Manboster 将加入其软件仓库，并由我们仓库所有者来维护。如果您使用的是 AOSC OS，只需使用包管理器 `oma` 安装即可。 If you are using AOSC, just install it with the package manager `oma`.

```shell
oma install manboster

```

## 想用 Docker 或其他容器服务跑 Manboster？

如果您想在 Docker 或其他容器服务中运行 Manboster，请阅读[此文档](/zh-cn/docs/container.md)。

## 查找并下载发行版 (Releases)

前往 [Releases 页面](https://github.com/manboster/manboster/releases) 下载适合你电脑的二进制文件。

The artifact contains different architecture and platform so you may carefully download suitable binary files.

文件名的格式大概是这样的：`manboster-{版本号}-{渠道}-{commit哈希}-{平台}-{架构}(.exe)`

| 文件名后缀 (平台 & 架构) | 对应的平台与架构系统                                                  | 常见设备举例                                                                    |
| ------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| darwin-arm64                                           | macOS (arm64 芯片)                         | Apple Silicon (M 芯片) 的 Mac                             |
| darwin-amd64                                           | macOS (x86_64 芯片)   | 较老的 Intel 芯片 Mac                                                          |
| win-amd64                                              | Windows (x86_64 芯片) | 绝大多数 Intel / AMD 架构的台式机或笔记本                                               |
| win-arm64                                              | windows with arm chip                                       | Qualcomm / MediaTek Desktop/Laptop                                        |
| linux-arm64                                            | Linux (ARM 芯片)                           | RockChip / AllWinner /... |
| linux-amd64                                            | Linux (x86_64 芯片)   | 普通的 Intel / AMD 服务器或 PC                                                   |
| linux-riscv64                                          | Linux (RISC-V 64 芯片)                     | ...                       |

> [!NOTE]
> If you don't know anything and you're using Windows, download `win-amd64` type. It will help in most times. If it would't work, download another one.

## 校验下载文件的 SHA256 哈希值（可选但推荐）

> [!WARNING]
> 警告：在运行任何从网上下载的程序前，这一步都非常关键！我们强烈建议你在双击执行前验证一下文件的完整性和安全性。

如果你用的是 Windows，可以在命令行输入：`certutil -hashfile [Manboster文件路径]`。

如果你用的是 macOS 或 Linux，请使用 `sha256` 或 `shasum -a 256` 命令。

Otherwise, you can also use GUI applications to calculate SHA256 sum and check them with assets specified on GitHub.

## 启动程序

If you want to try it out, just double-click it and start configuration wizard.

You may parpare:

1. 你的双手和聪明的脑子 🧠
2. 一个 API Key。如果你还没有，可以看看[这篇 OpenRouter 的教程文章](https://openrouter.ai/docs/cookbook/coding-agents/openclaw-integration#manual-configuration)学习如何获取。
3. 如果你想用 Telegram 作为聊天平台，那你还需要通过 @BotFather 申请一个 Bot Token。

配置向导搞定后，你可以打开终端输入 `./manboster start`，让它作为守护进程在后台默默运行。或者简单点，直接双击启动它也行。 Or just double-click it to start.

如果你使用的是后台守护进程模式，可以通过以下命令来管理它：

Start the daemon:

```shell
./manboster start

```

Stop the daemon:

```shell
./manboster stop

```

Restart the daemon:

```shell
./manboster restart

```

Checkout the daemon status

```shell
./manboster status

```

获取运行日志：

```shell
./manboster log

```

或者，你也可以直接打开 `~/.manboster/manboster.log` 文件看日志。如果找不到这个文件，去 Manboster 的可执行文件所在的目录下找找看。

## 停止程序

If you start it with double-click, just close it with your pointer.

如果是用 `./manboster start` 启动的，只需运行 `./manboster stop` 然后稍微等它一下。

## 尽情享受你的虾头小助手吧！
