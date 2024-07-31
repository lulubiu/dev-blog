import DailyList from "@/components/DailyList";
import { siteConfig } from "@/config/site";
import { getDailyPosts } from "@/lib/daily";
import { BlogPost } from "@/types/blog";

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `日常碎碎念 | Developer.lulu`,
  };
}

export default async function Page() {
  const { posts }: { posts: BlogPost[] } = await getDailyPosts();

  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-12"></div>
      <div className="w-full md:w-3/5 px-6">
        <h1>日常碎碎念</h1>
        <p>分享我平时的一些碎碎念，每一句都很短，总结在一起就很长。</p>
        <DailyList posts={posts} />
      </div>
    </div>
  );
}
