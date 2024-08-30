---
title: 解决 npm 下载速度慢问题
date: 2024-07-24
description: npm镜像源下载慢，配置更改
---

今天想要做一个新的项目，安装依赖的时候发现速度非常慢

<img src="/assets/npm-registry-resource/warn.webp" loading="lazy" alt="npm下载速度慢" />

好多的 `ERR_SOCKET_TIMEOUT`

看看我的镜像源用的是什么，怎么这么慢，使用命令 `npm config get registry`

<img src="/assets/npm-registry-resource/npm-config.webp" loading="lazy" alt="更改npm配置源" />

可以看到，使用的是 npm 官方的镜像源，更改一下，将镜像源更改到国内，运行命令 `npm config set registry https://registry.npmmirror.com`

运行完毕之后，可以在 `get registry` 命令查看下，确实是更改成功了

接下来回到项目上，再次运行 `pnpm install` 命令，问题解决

以上，感谢您的阅读