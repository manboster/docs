# Quickstart

> [!NOTE] 
> Tips: Manboster is currently in private developing stage, we will make it public when v0.2.0-rc is available, stay tuned!

## Go Developers?

If you downloaded [The Go Programming Language](https://go.dev/), you can simply use this to download Manboster:

```shell
go install github.com/manboster/manboster/cmd/manboster@latest
```

If you don't know what's this, go ahead.

## Mac Users?

If you're Apple Silicon Mac users, thanks to [Lockinwize Lolite](https://github.com/mzwing), this brew tap may help you install manboster:

Just execute homebrew (Homebrew required) to install:

```shell
brew tap MZWNET/tap
brew install MZWNET/tap/manboster
```

## AOSC OS Users?

If you are using AOSC(or named Anthon OS sometimes), we are happy to say that Manboster is going to be its software repository and maintained by the repository owner. If you are using AOSC, just install it with the package manager `oma`.

```shell
oma install manboster
```

## Using Docker or other container services?

If you want to run Manboster in docker or other container service, read [this document](/docs/docker).

## Find and Download Releases

Go to [Releases](https://github.com/manboster/manboster/releases) and download binary file suitable for your machine.

The artifact contains different architecture and platform so you may carefully download suitable binary files.

The assets' name is like `manboster-{Version}-{channel}-{commit}-{platform}-{architecture}(.exe)`

|  Artifact Name (Platform & Architecture) | Platform & Architecture   | Examples                            |
|------------------------------------------|---------------------------|-------------------------------------|
| darwin-arm64                             | macOS with arm64 chip     | Apple Silicon Macs                  |
| darwin-amd64                             | macOS with x86_64 chip    | Intel Macs                          |
| win-amd64                                | windows with x86_64 chip  | Intel / AMD Desktop/Laptop          |
| win-arm64                                | windows with arm chip     | Qualcomm / MediaTek Desktop/Laptop  | 
| linux-arm64                              | linux with arm chip       | RockChip / AllWinner /...           |
| linux-amd64                              | linux with x86_64 chip    | Intel / AMD / ...                   |
| linux-riscv64                            | linux with riscv64 chip   | ...                                 |

> [!NOTE]
> If you don't know anything and you're using Windows, download `win-amd64` type. It will help in most times. If it would't work, download another one.

## Check SHA256 sum of your downloaded items (optional)

> [!WARNING]
> This is crucial before running any application downloaded from the Internet, we strongly recommend you to do this before execute any binary!

If you are using windows, use `certutil -hashfile [Path To Manboster]`.

If you are using macOS or linux, use `sha256` or `shasum -a 256`.

Otherwise, you can also use GUI applications to calculate SHA256 sum and check them with assets specified on GitHub.

## Start the application

If you want to try it out, just double-click it and start configuration wizard.

You may parpare:

1. Hand and brain
2. An API Key, if you have none, learn how to get it in [this OpenRouter's Article](https://openrouter.ai/docs/cookbook/coding-agents/openclaw-integration#manual-configuration)
3. If you want to use Telegram as your chat provider, you may need a Bot Token provided by @BotFather

After the configuration wizard was done, you can open terminal and run `./manboster start` to start a daemon running in background. Or just double-click it to start.

If you are using daemon mode, you can use following commands to control it:

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

Get the log
```shell
./manboster log
```

Or open `~/.manboster/manboster.log`, if none, checkout manboster executable file's folder.

## Stop the application

If you start it with double-click, just close it with your pointer.

If you start it with `./manboster start`, just run `./manboster stop` and wait.

## Enjoy your Lobster!
