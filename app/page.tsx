import { getBlogPosts } from "@/lib/blog";
import { BlogPost, PostsByMonth } from "@/types/blog";
import dynamic from 'next/dynamic';

const BlogList = dynamic(() => import('@/components/BlogList'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 w-full rounded"></div>
});

const TimeLine = dynamic(() => import('@/components/TimeLine'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-20 w-48 rounded"></div>
});

export default async function Home() {
  const {
    posts,
    postsByMonth,
  }: { posts: BlogPost[]; postsByMonth: PostsByMonth } =
    await getBlogPosts();

  return (
    <div className="flex flex-col md:flex-row w-full pt-4 md:pt-12">
      <div className="hidden md:block md:w-1/6 pl-6"></div>
      <div className="w-full md:w-3/6 px-3 md:px-6">
        <BlogList posts={posts} />
      </div>
      <div className="hidden md:block md:w-2/6 pr-6">
        <div className="max-w-[200px] ml-auto">
          <TimeLine postsByMonth={postsByMonth} />
        </div>
      </div>
    </div>
  );
}
