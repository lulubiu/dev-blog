---
title: 在 cloudflare 上踩的一些坑
date: 2024-06-13
description: cloudflare上报错ERR_TOO_MANY_REDIRECTS；cloudflare域名托管；重定向规则设置
---

## 部署网站，报错: ERR_TOO_MANY_REDIRECTS

我在部署个人网站时，使用的是 vercel + cloudflare 这一套，结果刚部署完兴冲冲访问网站时，报错说：ERR_TOO_MANY_REDIRECTS  
给我整懵逼了，因为我就绑定了一个域名，配置了一下域名解析，其他还啥都没干呢   

经过查阅资料，发现报错原因是因为：   
cloudflare 的 SSL/TLS 选择的是 `灵活` ， 这样 cloudflare 将请求从服务器发送到 vercel 部署时使用的是 http 而不是 https   
vercel 会自动将所有 http 请求升级为使用 ssl ，所以会发送 308 状态码重定向到相同位置   
cloudflare 将重定向转发给用户，但是由于客户端已经在 https://example.com 上了，就会导致生成到相同位置的重定向   
诶嘿，闭环了，我自己重定向到我自己，所以就报错： ERR_TOO_MANY_REDIRECTS   
找到原因之后，解决方案也就出来了，将 cloudflare 的 SSL/TLS 设置为 `完全(严格)`   
要求 cloudflare 发送的请求就是 https ，打破循环   

<img src="/assets/cloudflare-some-error/error.webp" loading="lazy" alt="ERR_TOO_MANY_REDIRECTS问题解决方案" />

## NameSilo + Cloudflare 给网站加个域名

网站部署好之后，都会买一个域名给它绑定上

我是在 NameSilo 上面买的域名，在这个平台上购买的原因是因为：续费价格和购买价格一致，不需要担心续费涨价问题；免费送隐私服务，这项服务在其他平台上是收费的

但是有一说一， NameSilo 的界面确实是，没那么友好...

看到 cloudflare 支持托管域名时，就想把 NameSilo 上面购买的域名托管到 cloudflare 上面去

主要操作就是，先来到 cloudflare 界面，添加站点(登录到 cloudflare 之后，右上角就能看到\

<img src="/assets/cloudflare-some-error/add-website.webp" loading="lazy" alt="添加站点" />

按照提示一步步操作就好，接下来需要去 NameSilo 的后台， 找到你的域名管理界面，在最右边能看到如下图的标志，点进去到界面将 name server 更改为 cf 上面的 dns 记录即可

<img src="/assets/cloudflare-some-error/change-dns.webp" loading="lazy" alt="更改NameSilo上的dns记录" />

操作完毕之后，等一会儿，就能在 cf 上看到域名有效，以后在 cf 上操作就行了

如果你也决定在 NameSilo 上购买域名的话，可以用我的优惠码： <strong> discountforyou </strong>

能省一美元，我也能赚一丢丢佣金，咱们双赢 😆

附一下 NameSilo 的官网地址: [https://www.namesilo.com/](https://www.namesilo.com/)

## 设置 www 域名重定向到根域名

以前都是在 vercel 上部署，绑定域名，操作很简单，直接选择一下就可以了，然后在 cloudflare 上配置好 dns 记录，
接下来访问 `www.xxx.com` 网址的话，会自动重定向到 `xxx.com`

现在我的个人技术博客，部署到了 cloudflare 上，和 vercel 不同，如果也想实现重定向，则需要进行一些配置

首先在 cloudflare 后台添加对应 www 的 dns 记录

然后在 `规则` -- `重定向规则` 界面中，新建一条规则

选择 `自定义筛选表达式`，配置`主机名 等于 www.lulubiu.com` ，则 url 重定向 `动态 concat("https://lulubiu.com"， http.request.uri.path)` ，状态代码选择 `308`

勾选 `保留查询字符串`

详细见下图:

<img src="/assets/cloudflare-some-error/config.webp" loading="lazy" alt="规则设置" />

更详细的可参考官方指导文档: [cloudflare doc](https://developers.cloudflare.com/rules/reference/page-rules-migration/#migrate-forwarding-url)

设置完毕之后，再去 dns 那里，设置一条 `CNAME` 记录即可

接下来访问 `www.lulubiu.com` 时，会自动重定向到 `lulubiu.com`

问题解决

## vite 框架项目部署到 cloudflare 上，访问具体界面时报 404

update：2025-04-06 15:37:50

刚刚把一个 html 项目重构成了 vite 框架的，因为 html 项目想要更改一个 footer 内容，就要所有文件都动一遍，想来想去，不如花点时间重构一下，这样以后更改起来方便一些

因为是部署在 cloudflare 上，nextjs 框架支持不是很好，最后选用了 vite 框架

刚刚兴冲冲重构完毕，部署完成之后，访问了一下项目，发现 index 界面是没问题的，一访问具体的界面就报错 404 ，给我整懵逼了，因为我在本地都运行看过没问题之后，才提交版本的

更神奇的是，访问具体的工具界面报错，但是访问 about/terms of use 等界面却是没问题，在本地构建之后，如果使用 `npx serve -s dist` 在本地看就没事，直接 `npx serve dist`命令就和部署之后的现象一致

问了一下 gpt 才知道，使用 `-s` 参数时，是开启了服务器模式，如果部署在 cloudflare 上需要开启 SPA 模式，我瞅了一圈，也没看到怎么开启，后来在官方文档中： [Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/) 中找到了答案

> If your project does not include a top-level 404.html file, Pages assumes that you are deploying a single-page application. This includes frameworks like React, Vue, and Angular. Pages' default single-page application behavior matches all incoming paths to the root (/), allowing you to capture URLs like /about or /help and respond to them from within your SPA.

简单讲就是，vite 框架构建完成之后，有 dist 目录，在这个目录下，和 `index.html` 一起的没有 404.html 的话，默认就是开启 SPA 模式的

看到这个，我一看，好家伙，我确实在 public 目录添加了一个 404.html ，怪不得一直访问具体的工具，显示 404

找到问题，解决就很好办了，删除 public 目录下的 404.html ，另外新建一个 404 component

还有一个点，因为刚开始排查错误时，对配置文件做了更改，我不确定是不是这一点也起到了作用，记录在这里

在 `vite.config.ts` 文件中，添加 `base` 路径，具体如下：

```
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/'
})
```

以上，问题解决