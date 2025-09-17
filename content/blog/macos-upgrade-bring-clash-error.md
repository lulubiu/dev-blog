---
title: Clash：You origin Config has been renamed
date: 2025-09-17
description: sorry，这里没有解决方案，只有一些思路
---

昨晚电脑提醒我有新的更新，没啥犹豫，点了更新之后，再打开 clash 时，不知道为啥总是报错：You origin Config has been renamed

我第一反应就是，大不了就是卸载重装嘛，结果还是报错   
难道是我没卸载干净？再试一次，结果还是报错   
现在搜到了，好像是 macos 26 系统版本就是不支持的？ [更新macos26后打开会立即闪退，显示origin config文件已更改，即使强行维持运行也会显示api Connect error（即使是direct模式仍然显示这个错误）](https://github.com/MetaCubeX/ClashX.Meta/issues/144)   
我看到评论区说 try this vision [https://down.nmsl.ooo/mac/ClashX.dmg](https://down.nmsl.ooo/mac/ClashX.dmg) ，有人说这个管用，放在这里

但我不太能用 clashX 版本，我需要用 pro 版本才行，因为 pro 版本有增强模式，如果没有增强模式/TUN 模式的话，我就没办法使用 cc   
想到有人给我推荐过 [clash verge](https://www.clashverge.dev/install.html)   
使用了 clash verge 之后，我的问题就解决了   
在 clash verge 中，增强模式 就是 虚拟网卡模式/TUN 模式，我使用的是 2.4.2 版本，在 首页-网络设置-虚拟网卡模式 可以找到，也可以在 设置-系统设置-虚拟网卡模式 找到，也可以右键单击该软件，在弹出框中选择 TUN 模式，说的都是一个事情（我电脑是 mac，windows 不太确定是不是哈）

不过对方推荐我用 2.3.1 版本，说是新版本问题有点多   
但我已经装好了 2.4.2 版本，而且用着感觉还没出现啥问题，所以就懒得再换了，等出现啥问题，就卸载重装吧 🤣

这个是官方的列表，可以看自己的需求决定下载哪个版本： [releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)

以上，供你参考

感谢您的阅读～