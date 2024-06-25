import ThinkList from "@/components/ThinkList";
import { siteConfig } from "@/config/site";
import { getThinkPosts } from "@/lib/think";
import { BlogPost } from "@/types/blog";

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `一些思考 | Developer.lulu`,
  };
}

export default async function Page() {
  const { posts }: { posts: BlogPost[] } = await getThinkPosts();

  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-12"></div>
      <div className="w-full md:w-3/5 px-6">
        <h1>一些思考</h1>
        <p>分享我的一些 思考/总结 等</p>
        <ThinkList posts={posts} />
      </div>
    </div>
  );
}
