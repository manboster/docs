# Introducing Hachimi

## What's a "Hachimi"?

Hachimi is a guard model mainly running on your device side (or you can change the provider to another, if you select 'gguf', it will use `llama.cpp` and FFI technology (yzma) to run Hachimi locally on your machine).

Imagine that the Hachimi is the judge of the cloud LLM, it acts as a guard model in your local machine before executing. It effectively reduces the hallucination caused by a single model but it could not tackle advanced and complex prompt engineering.

## How can I see it work?

This is an example of calling tool:

```
🐱➖ 🤖✅ 🌐 Manboster Request Tool: http://127.0.0.1:8080/api
```

`🐱` means Hachimi status, the emoji next to the cat indicates Hachimi activate status: `➖` means Hachimi is not activated in this tool call, `✅` means Hachimi thinks it's safe or you manually allowed Hachimi's suspcious or unsafe report, `❌` means you rejected Hachimi's suspcious or unsafe request.

## How can I open it?

On setup wizard, the wizard will prompt that whether you want to enable it or not. If you don't enable it at that time, you can enable it later in `./manboster config` manager  `(Configuration > Hachimi)`.

## System Requirements

If you are running default model `Qwen3 Guard Gen 0.6B` with `medium` context, you need at least 768MB memory available on your machine. It's more better when it's more than 1GB memory available.

The memory occupation of Hachimi Model varies based on the size of the running model and context length, you can assume the model occupation as 1.2x file size.

And the context length occupations is on the table below:

|   Context Length      |  Memory Occupation |
|-----------------------|--------------------|
| Low (1k tokens)       |  150MB on average  |
| Medium (2k tokens)    |  250MB on average  |
| High (4k tokens)      |  450MB on average  |
| x-High (8k tokens)    |  850MB on average  |

The context length is longer, the more things Hachimi can understand. If the evaluate message is too long (more than the limitation of the context length), it will fallback to human.

For example, you are using `Qwen3 Guard Gen 0.6B`, which is `400MB` on size, and you selected `medium` context length.

The final memory occupation would be:

```
400MB * 1.2 + 250MB = 480 + 250 = 730MB
```


> [!WARNING]
> This is the minimum memory size required by Hachimi, we strongly recommend you to keep more spaces in order to avoid system's SIGKILL because it causes OOM(Out of Memory).

## Hachimi Roles

> [!WARNING]
> Hachimi helps you decide cloud LLM's tool call requests safe or not. It truly helps reduce the cost of decision and make workflows more fluently. However, as the limitation of the transformer LLM, you couldn't absolutely handle anything to it.

When it comes to tool selection, you can select `Handle by Hachimi` or `All handle by Hachimi for 1 hour` to activate Hachimi. You can also send `/reset` command to reset tool call handle status.

When Hachimi thinks it's suspicious or unsafe, the gatekeeper will hang up the request process, asking user to allow or reject request.

Also, We use the lazy load technology to load Hachimi, if there is no requests available for a moment(now it is set 15 minutes), we will unload it automatically.

## Troubleshooting

If you could not download the model due to the poor Internet Connection, download `https://huggingface.co/QuantFactory/Qwen3Guard-Gen-0.6B-GGUF/resolve/main/Qwen3Guard-Gen-0.6B.Q4_K_M.gguf?download=true` or use a mirror like `modelscope.cn` to download manually into `~/.manboster/hachimi/models/Qwen3Guard-Gen-0.6B.Q4_K_M.gguf` if you are using default model.

If you are using other models, just download them to `~/.manboster/hachimi/models/` with their name and start the application to enjoy.

If you could not download llama.cpp due to the poor Internet Connection, go to GitHub or its mirror [llama.cpp Releases](https://github.com/ggml-org/llama.cpp/releases) download suitable arch's files and copy them into `~/.manboster/hachimi/llama.cpp/`.

## Custom Configuration (For advanced users)

You need a gguf-formatted model file, you can get them from [huggingface](https://huggingface.co/).

When it comes to configuration prompt, just skip manual configuration, fill this gguf file URL to the form and it will be downloaded silently on the start if there is no model available.
