# Quickstart

> [!NOTE] 
> Tips: Manboster is currently in private developing stage, we will make it public when v0.2.0-rc is available, stay tuned!

## Go Developers?

If you downloaded [The Go Programming Language](https://go.dev/), you can simply use this to download Manboster:

```shell
go install github.com/manboster/manboster/cmd/manboster@latest
```

If you are noob, go ahead.

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

## Check sha256 sum of your downloaded items(optional)

> [!WARNING]
> This is crucial before running any application downloaded from the Internet, we strongly recommend you to do this before execute any binary!
