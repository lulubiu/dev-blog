---
title: vuepress-theme-hope + vercel 部署踩坑经验分享
date: 2024-07-03
description: 网站样式丢失问题解决；网站 logo 添加；sitemap 自动生成；vercel 部署报错；给网站添加 description/keywords；添加谷歌统计代码
---

本来是计划用 vuepress 框架来搭建一个网站的，结果发现了上手更容易的网站框架：vuepress-theme-hope

在开始介绍之前，先放一下官网链接地址，大部分的问题，都能在官网中找到答案：[https://theme-hope.vuejs.press/zh/guide/](https://theme-hope.vuejs.press/zh/guide/)

接下来详细写写在整个过程中踩到的一些坑

## 部署到 github 之后，网站样式丢失问题

这个问题，只要在网上搜索一下，就能知道是 `base` 路径那里写的有问题，改成自己的仓库名称就可以了

比如我的仓库名称是 `blog`，`base` 路径这里写成 `/blog/` 就可以了，如果你的仓库名称是 `myblog` 对应做修改就行了

![vuepress-theme-hope-base路径修改](/assets/vuepress-theme-hope/blog.jpg)

修改了之后，开启 gitpage 功能，然后访问 .io 界面发现，果然问题解决了

既然是网站，肯定是要有个域名吧，我在 github 上绑定了域名之后，很快啊，网站样式又丢失了，神奇的是，我不绑定域名之后，网站样式就没问题了

给我整懵逼了。。。遇事不决，就问问 gpt

![vuepress-theme-hope-网站样式丢失修改](/assets/vuepress-theme-hope/gpt.jpg)

看到它给的答案之后，我意识到，还是 `base` 路径设置的问题，给的方案就是把 `base` 路径改成自己的域名

但这样有一种治标不治本的感觉，如果我回头想要换域名了呢，还要再来改一遍？或者这个网站做出来了，我就想要复制这个模板，直接再做另外一个网站，然后也要来换？

最后是在 Vuepress 官网上找到了解决方案：[基本配置-dest](https://vuepress.vuejs.org/zh/config/#dest)

网站样式之所以丢失不是因为 `base` 路径有问题吗，我现在不用你了，直接指定输出目录，部署的时候也选择这个目录不就好了

所以我项目的最后配置是这样的：

![vuepress-theme-hope-网站样式丢失问题解决](/assets/vuepress-theme-hope/dest.jpg)

正好我用的 vercel 平台部署的，它默认的输出目录也是这个：

![vercel-默认输出目录](/assets/vuepress-theme-hope/vercel.jpg)

## 访问网站时，我的网站 logo 怎么没有了

我将项目部署到 vercel 平台之后，再看网站 logo 一直不显示

网站 logo 一般都是在 `head` 标签中设置，去看了一下这个主题没有这个标签

翻了翻源码，找到了配置方法，在 `config.ts` 文件中，添加上 `head` 设置就可以了

![vuepress-theme-hope-head标签设置](/assets/vuepress-theme-hope/head.jpg)

## 不生成 sitemap

vuepress-theme-hope 主题是默认生成 sitemap 的，但我不知道我做了什么操作，导致它一直不生成

下载官网 demo 运行之后发现是生成的，然后开始一个配置文件一个配置文件的看，到底是哪里不一样，最后终于找到了原因

在 `theme.ts` 文件，有一项配置是 `hostname`，这一项的值就是你的域名，也就是你的网址，我当时下载下来之后，这一项给的默认值肯定是 demo 的，我一看用不到也不知道有什么用，就删掉了，结果就是 sitemap 不生成了

将这一项更改成你自己的域名，问题解决

![vuepress-theme-hope-hostname设置](/assets/vuepress-theme-hope/hostname.jpg)

发现这个问题时，是整个网站都上线运行了，提交网址到 google search console 后台时发现没有 sitemap，然后才发现这个问题的

希望你可以避免掉这个问题～

## vercel 部署报错

网站搭建好之后，是在 vercel 平台上部署的，结果我还没休息一分钟，一个报错信息就过来了

![vercel报错信息](/assets/vuepress-theme-hope/vercel-error.jpg)

之所以出现这个问题，是因为 vuepress-theme-hope 的 package.json 文件中的脚本运行命令，和 vercel 设置的不一样，如图，vuepress-theme-hope 的运行命令是这样的👇

![vuepress-theme-hope-packagejson-脚本命令](/assets/vuepress-theme-hope/packagejson.jpg)

而 vercel 的运行命令是这样的👇

![vercel部署配置](/assets/vuepress-theme-hope/vercel-deploy-config.jpg)

解决方案就是，要不更改 vercel 的 deploy 配置，要不更改 vuepress-theme-hope 的脚本运行命令

选择更改 vercel 配置的话，重写 vercel 的命令即可，详细可参考下图（是不是觉得眼熟？对的，这张图在前面出现过）：

![vercel-默认输出目录](/assets/vuepress-theme-hope/vercel.jpg)

选择更改 vuepress-theme-hope 的脚本运行命令的话，可以参考下图：

![vuepress-theme-hope-脚本命令更改](/assets/vuepress-theme-hope/change-packagejson.jpg)

这两种方案选择其中一个即可，问题就解决了

## seo：如何给网页添加 description/keywords

如果想要做 seo 的话，肯定离不开给网页添加 description/keywords 

搜索了下官方文档，还是挺清晰的，详细可见：[添加 head 标签](https://theme-hope.vuejs.press/zh/guide/advanced/seo.html#%E7%9B%B4%E6%8E%A5%E6%B7%BB%E5%8A%A0-head-%E6%A0%87%E7%AD%BE)

具体就是在每个 md 文件中，添加如下配置：

```
description: 
head:
  - - meta
    - name: keywords
      content: 
```

添加完毕之后，网页也就有了对应的 description/keywords

## 如何添加谷歌统计代码

官方给出了社区插件：[社区插件](https://theme-hope.vuejs.press/zh/cookbook/vuepress/plugin.html#%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6)

但我试了下，不是很有用

最后采用的是比较笨的方法，在 `head` 中，添加如下统计代码：

```
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G- XXXXXXXXXX",async: true}],
    ['script', {},
                " window.dataLayer = window.dataLayer || [];\
                function gtag(){dataLayer.push(arguments);}\
                gtag('js', new Date());\
                gtag('config', 'G-XXXXXXXXXX');"],
```

接下来验证是否设置成功，来到网站， F12 打开看看有没有发送 `collect` 请求,有发送则说明设置成功

目前是遇到了这些问题，后续有遇到新的问题的话，再来补充～