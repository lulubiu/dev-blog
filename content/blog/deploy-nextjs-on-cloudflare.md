---
title: 在 cloudflare 上部署 nextjs 项目
date: 2024-06-07
description: nextjs 部署在 cloudflare 上，nextjs 对应配置；踩坑分享
---

最近在群里看到有人说，cloudflare 也可以部署网站，我挺惊讶的，因为我一直用它来管理我在 namesilo 上买的域名，然后用下它的 cdn 网络，其他功能就没怎么用过了

想着既然可以部署，那我试一下（好奇心旺盛的我 🤣

进入到 cloudflare 管理界面，往下找到 Workers 和 Pages :

<img src="/assets/deploy-nextjs-on-cloudflare/pages.webp" loading="lazy" alt="cloudflare管理界面" />

Workers 我看不能和 github 仓库连接，Pages 可以，所以我们在 Pages 界面下进行创建程序

<img src="/assets/deploy-nextjs-on-cloudflare/create-pages.webp" loading="lazy" alt="创建程序" />

按照提示，将自己的 github/gitlab 账号进行绑定，然后选择其中一个仓库进行部署即可

在 vercel 上部署时没有任何问题，但是在 cloudflare 上部署时遇到了一个问题

<img src="/assets/deploy-nextjs-on-cloudflare/not-found.webp" loading="lazy" alt="未找到目录" />

说是没有找到目录，更改了之后，部署还是失败

又去查看了 nextjs 的文档，如果是静态网站的话，需要在 `nextConfig` 中，指定输出

<img src="/assets/deploy-nextjs-on-cloudflare/export.webp" loading="lazy" alt="导出" />

设置好了之后，再去配置界面，将输出目录更改为 "out" 即可

<img src="/assets/deploy-nextjs-on-cloudflare/config.webp" loading="lazy" alt="更改目录" />

问题就解决了

以上，感谢您的阅读