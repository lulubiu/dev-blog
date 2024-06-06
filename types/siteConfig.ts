import { IconType } from "react-icons"


export type Link = {
  name: string
  href: string
  icon: IconType
}
export type ThemeColor = {
  media: string
  color: string
}
export type AlternateURLs = {
  canonical?: null | string | URL;
};
export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage?: string
  headerLinks: Link[]
  metadataBase?: URL | string
  alternates?: null | AlternateURLs;
  themeColors?: string | ThemeColor[]
  defaultNextTheme?: string
  icons: {
    icon: string
    shortcut?: string
    apple?: string
  }
  openGraph?: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
    images?: string[]
  },
  twitter?: {
    card: string
    title: string
    description: string
    images?: string[]
  },
}
