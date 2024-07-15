---
title: 给你的网站加个效果：Next.js View Transitions
date: 2024-07-15
description: Next.js View Transitions 介绍；官方仓库；如何使用
---

最近给我的网站加上了一些效果，非常细心的网友可能觉察到了，打开新的界面时，转换效果和以前有些许的不同，是因为我加上了 Next.js View Transitions

Astro 框架的网站，去年就上了这个效果，Next.js 框架不知道为什么，今年才上

## 什么是 Next.js View Transitions

Next.js View Transitions 是一个为 Next.js 应用程序提供平滑页面过渡效果的功能。它利用了浏览器的 View Transitions API，让页面之间的切换更加流畅和视觉吸引人   
目的：为 Next.js 应用程序中的页面导航添加流畅的过渡动画效果   
工作原理：它利用浏览器的 View Transitions API，这是一个原生 API，用于控制页面或组件视图之间的转换效果   
易用性：通过使用 next-view-transitions 库，开发者只需几行代码就能在 Next.js 项目中实现全站的视图过渡效果   
性能：由于使用了浏览器原生 API，这种方法比传统的 JavaScript 动画库更加高效   
用户体验：通过添加平滑的过渡效果，可以显著提升用户体验，使页面导航更加连贯和吸引人   
适用场景：适合多页面应用，如电商网站、博客平台或社交媒体应用等需要频繁页面切换的场景   
实现方式：通常需要在布局文件中包装 `<ViewTransitions>` 组件，并使用特定的 `<Link>` 组件来触发转换   
兼容性：专为 Next.js 的 App Router 设计，与其架构完美适配   
整体来讲，Next.js View Transitions 是一个简单又强大的工具，能够让开发者轻松地为 Next.js 应用添加专业级的页面过渡效果，从而提升整体用户体验

## Next.js View Transitions 官方仓库

如果想要在 Nextjs 框架中使用，直接参考官方仓库给出的案例即可，官方仓库在这里：[https://github.com/shuding/next-view-transitions](https://github.com/shuding/next-view-transitions)

官方也有给出 demo，可以在这里在线查看：[https://next-view-transitions.vercel.app/](https://next-view-transitions.vercel.app/)

## Next.js View Transitions 如何使用

官方仓库中已经给出了用法，我这里重复啰嗦一下

首先需要在你的项目中，引入依赖：

```
pnpm install next-view-transitions
```

接下来找到 `layout` 文件，在这个文件中，做以下修改：

```
import { ViewTransitions } from 'next-view-transitions'

export default function Layout({ children }) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body>
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
```

大概就是，在该文件中，引入 `ViewTransitions` 依赖，然后将 html 相关代码放入到这个组件之间就可以了

此外还需要在对需要触发视图转换的链接，将原来的 `import Link from "next/link"` 修改为 `import { Link } from "next-view-transitions"` 即可

然后就可以在对应界面看到视图转换的效果了

## next-view-transitions 和 CSS View Transitions API 区别有哪些

next-view-transitions 和 CSS View Transitions API 有以下几个主要区别：   
- 实现层面：CSS View Transitions API 是浏览器原生提供的 API；next-view-transitions 是一个第三方库，专门为 Next.js 应用设计   
- 使用范围：CSS View Transitions API 可以用于任何网页应用；next-view-transitions 专门针对 Next.js 的 App Router 进行了优化   
- 易用性：CSS View Transitions API 需要开发者直接操作 DOM 和管理转换状态；next-view-transitions 提供了更简单的 API，只需要几行代码就可以在 Next.js 项目中实现全站的视图过渡效果   
- 功能：CSS View Transitions API 提供了更底层和灵活的控制；next-view-transitions 封装了常用的过渡效果，更适合快速实现基本的页面过渡   
- 集成度：CSS View Transitions API 需要额外的代码来与 React 和 Next.js 集成；next-view-transitions 已经为 Next.js 应用做了优化,可以更无缝地集成

总体来讲，next-view-transitions 是在 CSS View Transitions API 的基础上，为 Next.js 应用提供了一个更易用、更集成的解决方案。它简化了在 Next.js 项目中实现视图过渡的过程，但可能在灵活性上略逊于直接使用原生 API

## 使用 next-view-transitions 可以解决什么问题

使用 next-view-transitions 可以解决以下几个常见问题:   
- 页面切换生硬：next-view-transitions 提供了平滑的页面过渡效果，解决了传统 Next.js 应用中页面切换时的生硬感   
- 实现复杂性：相比直接使用 CSS View Transitions API，next-view-transitions 大大简化了在 Next.js 中实现视图过渡的复杂度，只需几行代码就能激活全站的视图过渡效果   
- 性能问题：由于利用了浏览器原生的 View Transitions API，next-view-transitions 比传统的 JavaScript 动画库更加高效   
- 用户体验不连贯：通过添加平滑的过渡效果，可以显著提升用户体验，使页面导航更加连贯和吸引人   
- 与 Next.js 集成问题：next-view-transitions 专门为 Next.js 的 App Router 设计，解决了 View Transitions API 与 Next.js 集成的难题   
- 兼容性考虑：该库考虑了与 Next.js 未来特性(如 Suspense)的兼容性，减少了开发者的后顾之忧   
- 自定义动画困难：next-view-transitions 允许开发者通过 CSS 自定义过渡动画效果，提供了极大的灵活性   
- 多页面应用的动画需求：特别适合需要频繁页面切换的多页面应用，如电商网站、博客平台或社交媒体应用等

综上所述，next-view-transitions 通过提供一个简单且强大的工具，解决了 Next.js 应用中实现平滑页面过渡的多个常见问题，大大提升了开发效率和最终用户体验

## next-view-transitions 是否会增加应用的体积

使用 next-view-transitions 对应用体积的影响通常是很小的，因为：   
- 库很小：next-view-transitions 是一个相对轻量级的库，它的核心功能主要依赖于浏览器原生的 View Transitions API，因此库本身的代码量并不大   
- 按需加载：Next.js 支持代码分割和按需加载。这意味着与视图过渡相关的代码只会在需要时才被加载，不会显著增加初始加载的体积   
- 树摇（Tree Shaking）：现代的构建工具支持树摇优化，可以去除未使用的代码。如果只使用了 next-view-transitions 的部分功能，未使用的代码不会被包含在最终的构建中   
- CSS 优化：视图过渡主要依赖于 CSS 动画，这些 CSS 规则通常很小，不会显著增加应用的总体积   
- 浏览器兼容性：next-view-transitions 利用了现代浏览器的原生功能，不需要包含大量的 polyfill 或兼容性代码   
- 替代方案对比：相比使用更重的动画库（如 Framer Motion），next-view-transitions 通常会导致更小的体积增加

综上，使用 next-view-transitions 带来的体积增加通常是可以忽略不计的，尤其是相对于它所带来的用户体验提升而言   
但如果你特别关注应用的体积，可以在集成后使用构建工具分析最终的包大小，以确保增加的体积在可接受的范围内

以上，感谢您的阅读