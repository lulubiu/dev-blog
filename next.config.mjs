import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 实验性功能
  experimental: {
    optimizeCss: true, // 启用CSS优化
    webVitalsAttribution: ['CLS', 'LCP'], // Web Vitals监控
    optimizePackageImports: ['react-icons', 'lucide-react', 'date-fns'], // 优化包导入
    viewTransition: true, // 启用内置 View Transitions API
  },

  // 图片优化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1年
    remotePatterns: [],
  },

  // 压缩配置
  compress: true,

  // 输出优化
  output: "export",
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  // 注意：在 Turbopack 中，需要使用字符串名称而不是导入的对象
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
