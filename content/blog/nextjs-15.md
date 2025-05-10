---
title: 【nextjs 15】`params` should be awaited before using its properties
date: 2025-05-10
description: 升级到 nextjs 15 的一些问题
---

最近新开了一个网站，使用的是 nextjs 框架最新版本实现的，给网站添加博客的时候，发现控制台报错：

```
Route "/blog/[slug]" used `params.slug`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
```

查了一下，发现是新版本对 params 相关属性做了一些更改，详细可见文档： [nextjs 15 upgrade](https://nextjs.org/docs/app/guides/upgrading/version-15#async-request-apis-breaking-change)

我把我修改的代码给出来，做一些参考

修改之前：

```
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {

}
```

修改之后：

```
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await props.params;
}
```

写法上稍有不同，最后我的问题解决了，供你参考