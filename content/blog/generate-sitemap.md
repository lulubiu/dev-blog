---
title: 纯 html 项目，如何自动生成 sitemap？
date: 2025-02-17
description: 纯 html 网站，如何自动生成 sitemap 文件
---

我有个网站，是纯 html 写的，所以如果想要生成 sitemap 文件的话，就需要自己手动写了

如果只有几个网页倒还好，考虑到后期这个网站会一直添加内容，想着还是写一个脚本，让它自动执行会比较好

以下是脚本内容：

```
const fs = require('fs');
const path = require('path');

const baseUrl = ''; // 网站域名
const directory = './'; // HTML文件目录

function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findHtmlFiles(filePath, fileList);
        } else if (path.extname(file) === '.html') {
            let relativePath = path.relative(directory, filePath);
            relativePath = relativePath.replace(/\\/g, '/');
            if (relativePath !== '404.html') {
                fileList.push(relativePath);
            }
        }
    });
    
    return fileList;
}

function generateSitemap() {
    const htmlFiles = findHtmlFiles(directory);
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    htmlFiles.forEach(file => {
        const url = `${baseUrl}/${file}`;
        sitemap += '  <url>\n';
        sitemap += `    <loc>${url}</loc>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.8</priority>\n';
        sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    
    fs.writeFileSync('sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
}

generateSitemap();
```

将上述脚本内容 copy 到一个 js 文件中，然后输入自己的网站域名，和 html 所在目录，接着运行命令 `node xxx.js` ，就能看到在当前目录生成了 sitemap 文件了

以上，感谢您的阅读