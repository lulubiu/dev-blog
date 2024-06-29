---
title: 想做个人网站？我踩的一些坑或许能帮助到你
date: 2024-06-29
---

对于一个程序员来说，不管是前端还是后端，应该都是想要拥有一个自己的网站的吧？   
如果是想要拥有的，这篇文章就是写给你的（先说下，我是后端程序员，前端大神轻喷

## 网站框架选择

如果你是新手，推荐 hexo/vue 框架，对新手友好，有很多功能都进行了封装，开箱即用就可以了   
我在 19 年的时候，使用 hexo + github 折腾过网站，而且看现在网上教程很多，就不再赘述   
vue 框架方面，个人推荐 vuepress ，感觉还不错   
基于 vuepress，又发现了几个很好看的模板：   
- vuepress-theme-reco ，基于它搭建的网站链接在这里：[vuepress-theme-reco](https://theme-reco.vuejs.press/docs/others/examples)   
- vuepress-theme-vdoing ，基于它搭建的网站链接在这里：[vuepress-theme-vdoing](https://doc.xugaoyi.com/pages/5d571c/)   
- vuepress-theme-hope ，基于它搭建的网站链接在这里：[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/demo/projects.html)

现在你看到的网站，是我用 nextjs 框架搭建的，新手不太建议使用，因为上手成本相比于 hexo/vue 框架来说，还是有点难度，nextjs 官网在这里：[https://nextjs.org/](https://nextjs.org/)

## 部署网站

网站框架选择好之后，更新好内容之后，接下来就是选择将网站部署到哪里   
如果是土豪，爱咋玩咋玩，像我这种就是找找有没有免费的方案 🤣

一个选择是 github，基于 git pages 功能来发布自己的网站   
vuepress-theme-hope 也有 github 自动发布的脚本，很方便，把设置弄好了之后，接下来做的就是写内容，提交到 github   
其他就不用 care 了，只要你脚本写对了，提交到 github 之后，就会自动更新，蛮方便的   
其他框架应该也有类似的机制

还有一个选择就是 vercel   
它的优点是相比于 github，vercel 的速度要快得多得多，也可以实现 github 更新，vercel 自动部署   
vercel 自动配置 https ，不用自己去申请证书什么的了，一大堆证书的配置也没有了，很适合我这种懒人   
还有就是，它还支持 serverless 接口，就是可以部署动态网站   
不过如果只是将博客部署到了 vercel 上面的话，国内访问还是有些慢的，可以 vercel + cloudflare 一起用，添加域名，然后域名在 cloudflare 上托管，按照 vercel 提示进行操作即可

再有一个选择就是 cloudflare，在它上面也踩了一些坑：   
[在 cloudflare 上踩的一些坑](https://lulubiu.com/blog/cloudflare-some-error)   
[在 cloudflare 上部署 nextjs 项目](https://lulubiu.com/blog/deploy-nextjs-on-cloudflare)

## 图床推荐

写个人博客的话，肯定离不开一些截图什么的吧，那这些图片要存储的吧   
我刚开始选择的方案是把图片保存在 github 上，结果做完网站之后发现在国内访问的话，网页内容都加载出来了，图片还没加载出来   

其实刚开始是打算用 七牛云/阿里云/腾讯云 的   
去试了下七牛云，毕竟是有 10GB 的额度可以免费用，付钱的事情，如果可以免费试用一下当然很棒了，兴冲冲把图片上传，然后放到博客里面去，部署之后发现，诶?图片怎么不显示呢   
发现图片的 url 不是 https 的，而是 http，而我的网站又要求是 https 的，所以图片就显示不出来   
那就想办法让七牛云提供的图片url 是 https 的不就好了   
结果发现，需要有一个备案的域名才可以   
呜呜呜，我没有，阿里云/腾讯云也是这样   
哎，折腾了半天，此路不通

开始找免费的图床   
关于免费的图床，网上的推荐一大堆，这里也就不再赘述了，感兴趣的可以自己去搜搜   
我最后选用了 helloimg 和 imgloc 这两个图床   
图片主要都存到了 helloimg 上，但是有些图片上传到该网站时，跟我说不让上传，可能是因为那张图片是个纯二维码，所以不让我上传，所以在 helloimg 上不能上传的图片，我都上传到了 imgloc   

目前网站还没涉及到数据库这块，哈哈哈哈   
回头等我的网站涉及到数据库交互了，我再来更新我的个人网站方案

以上   
感谢您的阅读