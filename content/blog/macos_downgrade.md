---
title: 给 mac 电脑降个级
date: 2025-09-19
description: 新版本问题，有点多啊。。。 所以我选择降级了
---

前几天把电脑升级到了 26 版本，结果没想到啊，感觉问题好多

程序坞中的启动台，把分组取消掉这种功能上的问题不说，但我明显感觉，升级之后，我的电脑运行速度变慢了   
有时候，只是开了一个浏览器，浏览器只是开了三四个标签，运用程序只有 vscode & cursor 开着，但是没有在跑   
就这样的情况，我在浏览网页的时候，界面卡的不行   
我这种性子受不了这么慢，所以就想着，不行降级吧

降级的话，因为系统已经是新的了，做备份也没有意义，索性就直接把整个盘的数据给抹掉，重新来了   
带来的结果就是，电脑上的数据，全部都没有了

对我来说，也还行，因为我大部分内容都是代码，放在了 github 上   
微信聊天记录啥的没有了，我也不是很在意，在我看来，能够丢失的，那都是不重要的 🤣

但重装系统之后，很多软件、以前的设置都要重新搞，些许麻烦，而且有的还没记录，所以又是重新搜索   
所以来写篇博客，记录一下操作，以后电脑再重装系统了（这种事情谁说得准呢），直接看着这篇文章搞就行了

macOS 电脑本身常用设置（系统版本 Sequoia）：   
系统设置-触控板-辅助点按   
系统设置-通用-软件更新-把自动更新相关的全部都关掉   
系统设置-控制中心-电池-显示百分比   
系统设置-控制中心-仅菜单栏-时钟-时钟选项-在时间中显示秒钟   
系统设置-桌面与程序坞-把该关掉的全都关掉   
访达-设置-将各种无关的都去掉   
访达-显示-显示路径栏（也可以在访达界面中，使用 `Option + Command + P` 快捷键）   
<img src="/assets/about-macos-upgrade/download.webp" loading="lazy" alt="访达界面" />

常用软件（必须）：   
raycast - 效率软件，下载链接 [https://www.raycast.com/](https://www.raycast.com/)   
谷歌浏览器 - 下载链接 [Google](https://www.google.com/intl/zh-CN/chrome/)   
Clash Verge Rev - 下载链接 [Clash Verge](https://github.com/clash-verge-rev/clash-verge-rev/releases)   
git - 通过运行命令 `git --version` ，在弹出框中进行安装即可   
node/npm - 下载链接 [nodejs](https://nodejs.org/en/download)   
ibar - 通过 app store 下载即可   
fastzip - 通过 app store 下载即可

我系统降级走的官方这篇文档，如果你有需要，可以查看 [如何从“macOS 恢复”启动](https://support.apple.com/zh-cn/102518)   
刚才看了看，好像这样做也行（但我没尝试） [抹掉 Mac 并还原为出厂设置](https://support.apple.com/zh-cn/102664)

目前想到的就是这些，后面想到什么了，再来补充