import BlogList from "@/components/BlogList";
import MDXComponents from "@/components/mdx/MDXComponents";
import dynamic from 'next/dynamic';
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/blog";
import { BlogPost } from "@/types/blog";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type Props = {
  params: {
    slug: string;
  };
};

const TOC = dynamic(() => import('@/components/TOC'), {
  loading: () => <p>加载目录中...</p>
});

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          defaultLang: {
            block: "typescript",
            inline: "javascript",
          },
        },
      ],
    ],
  },
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();
  const post: BlogPost | undefined = posts.find(
    (post) => post.metadata.slug === slug
  );

  return {
    ...siteConfig,
    title: `${post?.metadata.title || "404"} | ${siteConfig.name}`,
    description: `${post?.metadata.description}`,
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = params;
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();
  const postIndex = posts.findIndex((post) => post.metadata.slug === slug);
  const post = posts[postIndex];
  // Reverse list order, thus invert condition check
  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    notFound();
  }

  const { content, metadata } = post;

  return (
    <div className="flex flex-col md:flex-row w-full pt-4 md:pt-12">
      <aside className="hidden md:block md:w-1/6 pl-0 md:pl-6 max-h-[90vh] h-full overflow-auto sticky top-16 left-0 mt-6">
        <BlogList isSide posts={posts} />
      </aside>
      <div className="w-full md:w-3/6 px-3 md:px-6">
        <article id={`article`}>
          <h1 className="text-2xl md:text-3xl font-bold break-words hyphens-auto mb-6">
            {metadata.title}
          </h1>
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={options as any}
          />
        </article>
        <Separator className="my-8 md:my-12 bg-gray-600" />
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div>发布时间：{dayjs(metadata.date).format("YYYY-MM-DD")}</div>
          <div className="flex gap-4 flex-row">
            {prevPost ? (
              <Link href={prevPost.metadata.slug} className="link-underline">
                上一篇
              </Link>
            ) : (
              <></>
            )}
            {nextPost ? (
              <Link href={nextPost.metadata.slug} className="link-underline">
                下一篇
              </Link>
            ) : (
              <></>
            )}
            <Link href="/" className="link-underline">
              去首页
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-2/6 pr-6 mt-6">
        <div className="max-w-[200px] ml-auto sticky top-16">
          <TOC />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { posts }: { posts: BlogPost[] } = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export const revalidate = 3600; // 每小时重新验证一次