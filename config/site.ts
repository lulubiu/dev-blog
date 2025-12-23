import { SiteConfig } from "@/types/siteConfig";
import { BsGithub } from "react-icons/bs";
import { RiWechatPayFill } from "react-icons/ri";

const baseSiteConfig = {
  name: "Developer.lulu",
  description:
    "Developer.lulu 的个人博客，记录在折腾过程中踩过的坑，学到的知识，研究的理论，一些思考与感悟",
  url: "https://lulubiu.com/",
  metadataBase: new URL('https://lulubiu.com/'),
  alternates:{
    canonical: './'
  },
  defaultNextTheme: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'github', href: "https://github.com/lulubiu/dev-blog", icon: BsGithub },
    { name: 'wechat', href: "/wechatpay", icon: RiWechatPayFill },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
  },
}
