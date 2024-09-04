---
title: 【Next.js】博客性能优化
date: 2024-09-04
description: 使用 nextjs 搭建的博客，一些优化点记录
---

前几天逛 google search console 后台，检测了一下自己网站的速度，结果发现，性能好低，就开始了优化之路

## 插入图片由 jpg 改为 webp，同时设置懒加载

webp 格式，相比于 jpg 格式，要小一些，另外，因为我的博客都是使用 md 文件写的，没办法直接用 nextjs 提供的 Image 功能，但可以使用 html 的 img 标签，在使用 img 标签时，加上 `loading="lazy"` 设置，对于性能提升高那么一丢丢

## 开启 CSS 优化

在 `next.config.mjs` 文件中，开启 CSS 优化，具体代码为：   
```
experimental: {
    optimizeCss: true,
  },
```  

## 博客加载时，使用 dynamic 动态加载

在 Next.js 中，如果使用 dynamic 功能，可以通过延迟加载不必要的组件，按需加载来提高博客访问速度

对于我的博客来说，主要是针对 `blog/page.tsx` 文件进行更改

引入依赖：`import dynamic from 'next/dynamic';`   
针对 TOC 进行动态加载：   
```
const TOC = dynamic(() => import('@/components/TOC'), {
  loading: () => <p>加载目录中...</p>
});
```

## 优化搜索逻辑

使用 debounce 函数防止在用户输入时频繁触发搜索请求，这样可以减少不必要的 API 调用，提升性能，尤其是在用户快速输入时

将 debouncedSearch 包裹在 useCallback 中，确保只有在依赖项变化时才会重新创建这个函数。这有助于避免不必要的重新渲染和性能损耗

通过 useEffect 监听 query 的变化，当用户输入时，调用 debouncedSearch。这样可以确保只有在用户停止输入一段时间后才会执行搜索，进一步减少请求次数

说了这么多，其实优化只是几行代码而已，哈哈哈哈

```
  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      const results = await doSearch(value);
      setResults(results); 
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(query); 
  }, [query, debouncedSearch]); 
```

## 优化字体加载

因为博客使用了落霞孤鹜的字体，源仓库在这里：[https://github.com/lxgw/LxgwWenKai](https://github.com/lxgw/LxgwWenKai)

使用了官方提供的 cdn，结果发现还是有些慢

后来决定将官方文件下载到本地，为了让文件小一些，使用的是 Lite 版本，而且将 ttf 文件转换为了 woff2 文件，但仍然有 5MB 大，对于 web 应用来说，要加载 5MB 的文件，还是有些吃力的

后来受这篇博客启发，[icepro 博客开发故事](https://iceprosurface.com/%E6%9D%82%E8%AE%B0/icepro-%E5%8D%9A%E5%AE%A2%E5%BC%80%E5%8F%91%E6%95%85%E4%BA%8B) ，将自己用到的文字另外生成一个文件，这样整体文件会小很多，而且也不耽搁现有博客的字体

原博客已经有脚本了，我在原来基础上又修改了一下，我的脚本如下：

```
import klaw from 'klaw';
import * as path from 'path';
import { URL } from 'url';
import fs from 'fs';
import Fontmin from 'fontmin';

const __dirname = new URL('.', import.meta.url).pathname;

const textSet = new Set();
const contentDir = path.resolve(__dirname, "../content");
const files = klaw(contentDir);

for await (const file of files) {
  if (!file.stats.isDirectory()) {
    const content = fs.readFileSync(file.path, 'utf8');
    for (let i = 0; i < content.length; i++) {
      textSet.add(content[i]);
    }
  }
}

const allText = Array.from(textSet).join('');
console.log(allText);

const fontmin = new Fontmin()
  .src(path.resolve(__dirname, './LXGWWenKaiLite-Light.ttf'))
  .use(Fontmin.glyph({
    text: allText,
    hinting: false 
  }))
  .use(Fontmin.ttf2woff2())
  .dest(path.resolve(__dirname, '../public/fonts')); // 修改目标路径

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  }

  console.log(`新文本文件已生成: public/fonts 文件夹下`);
});
```

首先是将该脚本和原 ttf 文件放在一起，然后脚本会读取 content 文件夹下面的文件内容，将用到的字体去 ttf 文件中匹配，然后在 public/fonts 文件夹下生成一个新的 ttf 文件和 woff2 文件

新生成的 woff2 文件，只有 320KB，相比于 5MB 来说，还是相当可以接受的

生成文件之后，接下来也要进行对应修改，对于我的博客来说，具体是将 `style/globals.css` 文件中，将原来 `@import url('https://cdn.jsdelivr.net/npm/lxgw-wenkai-lite-webfont@1.1.0/style.css');` 改为：   
```
@font-face {
    font-family: 'LXGW WenKai Lite';
    src: url('../public/fonts/LXGWWenKaiLite-Light.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
```

其他不变即可

做完以上步骤之后，发现性能确实提高了一些，不过也还有进步空间，接下来会陆陆续续优化，也会把优化的点记录在这里

以上，感谢您的阅读～