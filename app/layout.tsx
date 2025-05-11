import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/blog";
import "@/styles/globals.css";
import "@/styles/loading.css";
import { BlogPost, PostsByMonth } from "@/types/blog";
import { Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
import GoogleAdsense from "./GoogleAdsense";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  ...siteConfig,
  title: siteConfig.name,
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
        <body className="min-h-screen bg-background antialiased">
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme={siteConfig.defaultNextTheme}
            forcedTheme={siteConfig.defaultNextTheme}
          >
            <Header posts={posts} />

            <main className="flex flex-col items-center py-3 md:py-6 w-full">
              {children}
            </main>

            <Footer />

          </ThemeProvider>

          {process.env.NODE_ENV === "development" ? (
            <></>
          ) : (
            <>
              <GoogleAdsense />
              <GoogleAnalytics gaId="G-6K7V0ZNCVM" />
            </>
          )}
        </body>
      </html>
    </ViewTransitions>
  );
}
