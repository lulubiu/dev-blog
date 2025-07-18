import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/blog";
import "@/styles/globals.css";
import "@/styles/loading.css";
import { BlogPost, PostsByMonth } from "@/types/blog";
import { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from 'next/font/google';
import GoogleAdsense from "./GoogleAdsense";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  ...siteConfig,
  title: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
};  

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { posts }: { posts: BlogPost[]; postsByMonth: PostsByMonth } =
    await getBlogPosts();

  return (
    <ViewTransitions>
      <html lang="zh" className={inter.className} suppressHydrationWarning>
        <head>
          {/* DNS预解析优化字体加载 */}
          <link rel="dns-prefetch" href="//cdn.bootcdn.net" />
          <link rel="preconnect" href="https://cdn.bootcdn.net" crossOrigin="anonymous" />
          {/* 字体加载优化 */}
          <link 
            rel="preload" 
            href="https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-webfont/1.6.0/style.min.css"
            as="style"
          />
          <link 
            rel="stylesheet" 
            href="https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-webfont/1.6.0/style.min.css"
          />
          {/* 预加载关键图片 */}
          <link rel="preload" href="/logo.svg" as="image" />
          {/* 第三方资源预连接 */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
          <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        </head>
        <body className="min-h-screen bg-background antialiased">
          {/* Web Vitals 监控 */}
          <Script
            id="web-vitals"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                import('/next/web-vitals').then((mod) => {
                  mod.getCLS(console.log);
                  mod.getFID(console.log);
                  mod.getFCP(console.log);
                  mod.getLCP(console.log);
                  mod.getTTFB(console.log);
                });
              `
            }}
          />
          
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme={siteConfig.defaultNextTheme}
            forcedTheme={siteConfig.defaultNextTheme}
          >
            <GoogleAdsense />
            <Header posts={posts} />

            <main className="flex flex-col items-center py-3 md:py-6 w-full">
              {children}
            </main>

            <Footer />

          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
