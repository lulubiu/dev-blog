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

export const metadata = {
  ...siteConfig,
  title: siteConfig.name,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
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
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="min-h-screen bg-background antialiased">
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme={siteConfig.defaultNextTheme}
            forcedTheme={siteConfig.defaultNextTheme}
          >
            <Header posts={posts} />
            <main className="flex flex-col items-center py-6">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
