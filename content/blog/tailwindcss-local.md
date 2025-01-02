---
title: 将使用的 tailwindcss 库，下载到本地
date: 2025-01-02
description: 纯 html 网站，会使用 tailwindcss 库，一般都是用在线 cdn 方式来引用，如果想要提高速度，最好将 css 文件下载到本地
---

最近练手，做了几个纯 html 的网站，为了让网站样式好看一些，使用了 tailwindcss 库，所以就会使用官方的 cdn 库 `https://cdn.tailwindcss.com`

我自己的性格是，更喜欢将使用到的样式，下载到本地，tailwindcss 也支持这样做

首先，安装 Node.js，如果不确定自己有没有安装，可以通过命令 `node -v` 来确认

打开文件目录，在文件目录下运行命令 `npm init -y` ，会得到一个 `package.json` 文件

安装必要依赖 `npm install -D tailwindcss`

创建 tailwind 配置文件 `npx tailwindcss init` ，会得到一个 `tailwind.config.js` 文件

创建一个源 `input.css` 文件，其中该文件配置内容如下：
```
@tailwind base;   
@tailwind components;   
@tailwind utilities;
```

接下来修改 `tailwind.config.js` 文件，修改内容如下：（主要是在 content 处做更改，你也可以将下面代码直接 copy 过去）：
```
/** @type {import('tailwindcss').Config} */   
module.exports = {   
  content: ["./*.html"],   
  theme: {   
    extend: {},   
  },   
  plugins: [],   
}
```

在 `package.json` 中添加构建脚本：
```
"scripts": {   
    "build": "tailwindcss -i ./input.css -o ./css/tailwind.css --watch"   
  },
```

以上做好之后，运行构建命令 `npm run build` 即可

因为我使用的是 `watch` 命令，所以当在控制台看到 `Done in xxms` 时，就可以 `ctrl + c` 退出流程了

然后在 HTML 文件中，将 CDN 链接替换为本地 CSS 文件即可

我的项目完整目录如下：
```
dir/
├── css/
│   └── tailwind.css 
├── index.html
├── input.css
├── package.json
└── tailwind.config.js
```

上面给出的都是非常基础的配置，如果你想要给自己的网站添加背景色，防止水平滚动等等，在源 `input.css` 文件中进行更改即可

更改之后，运行构建命令 `npm run build` ，构建新的 tailwind.css 文件，接下来就能看到自己所做的样式修改，更新到网站上了

扯点别的：

因为网站整体架构都是 html 文件，所以如果想要像 nextjs 项目那样，能够在本地运行，需要安装一下 `http-server`，然后运行命令 `http-server . -c-1` 就可以了

后面的参数，是为了清除缓存（btw，如果运行 http-server 命令时报错了，记得给对应目录提权 `chmod -R 755`

以上，感谢您的阅读