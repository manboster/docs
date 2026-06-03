# Quickstart

> [!NOTE] 
> Tips: Manboster is currently in private developing stage, we will make it public when v0.2.0-rc is available, stay tuned!

## Go Developers?

If you downloaded [The Go Programming Language](https://go.dev/), you can simply use this to download Manboster:

```shell
go install github.com/manboster/manboster/cmd/manboster@latest
```

If you are noob, go ahead.

## Mac Users?

If you're Apple Silicon Mac users, this brew tap may help you install manboster:

Just execute brew to install:

```shell
brew tap MZWNET/tap
brew install MZWNET/tap/manboster
```

## Find and Download Releases

Go to [Releases](https://github.com/manboster/manboster/releases) and download binary file suitable for your machine.

The artifact contains different architecture and platform so you may carefully download suitable binary files.

The assets' name is like `manboster-{Version}-{channel}-{commit}-{platform}-{architecture}(.exe)`

|  Artifact Name (Platform & Architecture) | Architecture & Platform   | Examples                            |
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

## Check sha256 sum of your downloaded items (optional)

> [!WARNING]
> This is crucial before running any application downloaded from the Internet, we strongly recommend you to do this before execute any binary!

## Start the application

If you want to try it out, just double-click it and start configuration wizard.

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
