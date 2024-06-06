import BlogList from "@/components/BlogList";
import TimeLine from "@/components/TimeLine";
import { getBlogPosts } from "@/lib/blog";
import { BlogPost, PostsByMonth } from "@/types/blog";

export default async function Home() {
  const {
    posts,
    postsByMonth,
  }: { posts: BlogPost[]; postsByMonth: PostsByMonth } =
    await getBlogPosts();

  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6">
        <BlogList posts={posts} />
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right">
        <TimeLine postsByMonth={postsByMonth}></TimeLine>
      </div>
    </div>
  );
}
