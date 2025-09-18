---
title: 【macOS Tahoe】如何将启动台添加到程序坞
date: 2025-09-18
description: 新版本问题，有点多啊。。。
---

前几天把 macos 系统升级了，我的性子又是那种，如果这个用不到，那就删掉   
系统升级完，把启动台的图标给换了，我一瞅，这啥啊，用不到，就从程序坞中移除了   
今天才发现，原来那天我移除的是那个！我还有用！

看了网上的方式，说是通过苹果自带的搜索，然后输入“启动台”或者“Launchpad”，然后将搜索结果中的启动台图标拖拽到程序坞中你想要的位置；或者是去“应用程序”文件夹里面，找到“启动台”，拖拽到程序坞   
但我看了，新版本完全没有。。。

正愁着呢，突然想到，问问 ai 呀，claude code 真是好使   
这是我和它的对话：   
<img src="/assets/about-macos-upgrade/talk.webp" loading="lazy" alt="如何将启动台添加到程序坞" />
<img src="/assets/about-macos-upgrade/confirm.webp" loading="lazy" alt="命令确认" />

我使用的是第二个命令 `defaults delete com.apple.dock && killall Dock` ，因为这个命令看起来很短 🤣   
就是以前的设置都没有了，搞定之后，又开始进行一些我喜欢的设置了   
第一个命令我没尝试，如果你不想自己重新设置的话，可以尝试一下（我得再说一下，我没试这个，效果咋样，我不敢保证）：   
`defaults write com.apple.dock persistent-apps -array-add
  '<dict><key>tile-data</key><dict><key>file-data</key><dict><key>_CFURLString</key><string>/System/Applications/Launch
  pad.app</string><key>_CFURLStringType</key><integer>0</integer></dict></dict></dict>' && killall Dock`

但我恢复完之后发现，新版本的启动台也变样了，变成了这样：   
<img src="/assets/about-macos-upgrade/launchpad.webp" loading="lazy" alt="macos-26-启动台" />

这样的设计，感觉我可以直接使用快捷键，唤出 macos 自带的搜索，然后点击这里面的“应用程序”就行了 😅   
<img src="/assets/about-macos-upgrade/search.webp" loading="lazy" alt="macos-26-搜索框" />

hai，说实话，我还是挺喜欢以前的设计的，因为那些都是我自己定义的，我喜欢极简风格   
目前这个设计，没看到怎么自定义，就先让它在这儿叭，说不准下个升级又回来了呢

以上，感谢您的阅读～