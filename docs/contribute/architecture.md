# Manboster Architecture Documentation

In this document, we will introduce Manboster's file structure and explain why it is that. It may help you add new features or fix new bugs in a proper way.

## File Tree Overview

This is a tree for Manboster application currently, it provides a comprehensive architecture preview of the Manboster:

```
├── build  -> This is the build repo
│   └── manboster
├── build.sh  
├── cmd
│   ├── manbodev
│   └── manboster -> The entrypoint of Manboster
├── internal
│   ├── chat -> Where is the chat provider lives
│   │   ├── all -> Aonoymous import chat providers here
│   │   ├── feishu
│   │   ├── registry.go
│   │   ├── telegram
│   │   └── web
│   ├── cli -> The cli interface of Manboster & Manbodev
│   │   ├── helper -> Helper function for the Client Interface
│   │   ├── manbodev
│   │   ├── manboster
│   │   │   ├── app -> Main application entrypoint using Cobra(or plain text response)
│   │   │   ├── ctx -> Daemon context
│   │   │   ├── daemon -> Commands related to daemon
│   │   │   ├── init.go
│   │   │   └── interact -> Interactive User Interface for Manboster (Mainly onboard and edit configuration)
│   │   └── provider -> Interactive Interface Providers Instance
│   │       └── huh
│   ├── config -> Configuration parser & helper functions
│   │   ├── model -> Model Information collected in database
│   │   ├── prompt -> where the Default Prompt stores
│   ├── database -> Database module
│   │   └── types -> ORM Types
│   ├── downloader -> Download helper with checkpoint and speed hints
│   ├── engine -> The main engine of Manboster
│   │   ├── chatdata -> Chat Data Manager(Compact, write it to database)
│   │   ├── command -> Command Handler
│   │   ├── distribute.go -> Distribute chat message based on its type
│   │   ├── engine.go -> The declaration
│   │   ├── gatekeeper -> Gatekeeper Module
│   │   ├── gateway -> Gateway Module (With retries, send message & get message)
│   │   ├── handler -> Message Handler Module
│   │   ├── handler.go -> The main message handler loop lies
│   │   ├── hook -> Hooks manager
│   │   ├── load.go -> Load SessionID
│   │   ├── onboard -> Onboard manager, used when first run
│   │   ├── processor -> Preprocess messages received from Chat Provider and decide whether to handle or not
│   │   ├── runner -> Runner for cronjob handler
│   │   ├── runner.go -> Runner for main message session handler
│   │   ├── safeguard -> Evaluation tools for checking permission
│   │   └── soul -> The system prompt building module
│   ├── fs -> A helper module for storage file in disk for caching
│   ├── hachimi -> The Hachimi module
│   │   ├── all -> All providers registrar
│   ├── i18n -> i18n module
│   │   ├── keys -> i18n variable keys defined in Manboster Application
│   │   ├── locales -> i18n json stored in here
│   │   │   ├── en -> Languages...
│   │   │   └── zh-cn
│   ├── llm -> llm providers module
│   │   ├── all -> llm provider registrar
│   │   ├── oai_compat -> provider
│   │   ├── openrouter
│   │   └── universal
│   ├── loader -> provider loader & app loader
│   │   ├── chat.go -> load chat providers
│   │   ├── hachimi.go -> load hachimi providers
│   │   ├── llm.go -> load llm providers
│   │   ├── load.go -> load application
│   │   ├── loader.go
│   │   ├── model.go -> load models
│   │   ├── run_chat.go -> polling chats
│   │   ├── skill.go -> load skills
│   │   └── tool.go -> load tools
│   ├── plugin -> WASM plugin module (TODO)
│   ├── repository -> ORM Repository middleware
│   │   ├── types -> DTO Types
│   ├── session -> Session Manager
│   ├── skill -> skills compatibility layer
│   ├── tool -> Tool provider
│   │   ├── all -> tool registrar
│   │   ├── browser
│   │   ├── ...
│   │   └── vision
│   ├── util -> utilities used in Manboster
│   ├── vault -> vault services used in Manboster (TODO)
│   └── wasm -> wasm applications used in Manboster (TODO)
├── sdk -> Manboster Software Development Kit for go wasm plugins (TODO)
└── spec -> definitions of types
    ├── chat
    ├── cli
    ├── config
    ├── llm
    ├── plugin
    └── schema
```

## How a Manboster Application starts

Its execution flows like this:

```
`/cmd/manboster/main.go`(check i18n) -> `/internal/cli/manboster/app` -> `/internal/loader` -> `/internal/engine` 
```

1. Manboster's entrypoint file is `/cmd/manboster/main.go`. It will first activate i18n and then continue.
2. Then it will activate cobra and handle you to different commands. (Next is the description of `main`.)
3. `/internal/loader` loads Chat Providers(open new goroutines to poll, initialize and more), LLM Providers, Tool Providers and more.
4. If loaded, loader will open engine and wait for the message feed.

## How a message was handled in Manboster Engine

Its execution flows like this:

```
Chat Provider -> PreProcessor -> distribute.go -> handler.go -> handler -> chatProvider.Send ...
```

1. Chat Provider triggers a message event
2. Our PreProcessor checks out whether this message should be processed or not
3. distribute.go distribute messages to handler or other places based on its type
4. Handler will handle text, image and tool call and more.
5. Once end, we will make responses via `chatProvider.Send` and send back messages

We use Channels to help us manage incoming message from chat providers. It ensures the sequence of messages. And we defined session type in `/internal/session`, so you can get a preview in there.
