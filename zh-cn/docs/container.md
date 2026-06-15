# 在容器中运行 Manboster

本文档旨在帮助您在容器中运行 Manboster，使其易于部署和获取。

> [!NOTE]
> 此翻译部分内容由 Gemini 3.1 Pro 提供，如果有任何疏忽和遗漏，欢迎[向我们提交PR](https://github.com/manboster/docs/pull/new)进行修改！

## 容器镜像在哪里？

Manboster 的容器镜像是通过 GitHub Actions 自动生成的。它发布在 ghcr (GitHub Container Registry) 上。

官方容器镜像地址为：

```shell
ghcr.io/manboster/manboster
```

此外，您也可以拉取代码仓库到本地并手动进行构建。

## 如何部署？

如果您使用的是 Docker 或 Podman 的独立实例，您可以先启动初始化（onboard）配置：

```shell
# 如果您使用的是 Docker：
docker run --remove -it -v ./manboster-data:/app/manboster/ ghcr.io/manboster/manboster manboster onboard

# 如果您使用的是 Podman：
podman run --remove -it -v ./manboster-data:/app/manboster/ ghcr.io/manboster/manboster manboster onboard
```

如果没有问题，您可以使用以下命令继续进行部署：

```shell
# 如果您使用的是 Docker：
docker run -dit -v ./manboster-data:/app/manboster/ --restart=unless-stopped --name manboster-container ghcr.io/manboster/manboster

# 如果您使用的是 Podman：
podman run -dit -v ./manboster-data:/app/manboster/ --restart=unless-stopped --name manboster-container ghcr.io/manboster/manboster
```

如果您想启动配置 TUI（终端用户界面），请在 Manboster 停止后运行以下命令，否则会提示运行错误：

```shell
# 如果您使用的是 Docker：
docker stop manboster-container
docker run --remove -it -v ./manboster-data:/app/manboster/ ghcr.io/manboster/manboster manboster config

# 如果您使用的是 Podman：
podman stop manboster-container
podman run --remove -it -v ./manboster-data:/app/manboster/ ghcr.io/manboster/manboster manboster config
```

别忘了在配置完成后重新启动它们！

如果您使用的是 Docker Compose 或 Podman Compose，您可以将以下内容添加到 `docker-compose.yml` 文件的 `services` 字段中：

```yaml
services:
  manboster:
    image: ghcr.io/manboster/manboster
    container_name: manboster-container
    restart: unless-stopped
    volumes:
      - ./manboster-data:/app/manboster/
    stdin_open: true 
    tty: true
```

您可以先启动初始化（onboard）配置：

```shell
# Docker Compose
docker compose run --rm manboster manboster onboard

# Podman Compose
podman compose run --rm manboster manboster onboard
```

如果没有问题，您可以使用以下命令继续进行部署：

```shell
# Docker Compose
docker compose up -d

# Podman Compose
podman compose up -d
```

如果您想启动配置 TUI，请在 Manboster 停止后运行以下命令，否则会提示运行错误：

```shell
# Docker Compose
docker compose stop manboster
docker compose run --rm manboster manboster config

# Podman Compose 
podman compose stop manboster
podman compose run --rm manboster manboster config
```

别忘了在配置完成后重新启动它们！
