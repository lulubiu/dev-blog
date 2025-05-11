import { SiteConfig } from "@/types/siteConfig";
import { BsWechat } from "react-icons/bs";

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
    { name: 'wechat', href: "/wechat", icon: BsWechat },
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
