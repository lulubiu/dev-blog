import { BlogPost } from "@/types/blog";
import dayjs from "dayjs";
import Link from "next/link";

export default async function BlogList({
  isSide,
  posts,
}: {
  isSide?: boolean;
  posts: BlogPost[];
}) {
  return (
    <ul className="flex flex-col gap-3 md:gap-4 w-full">
      {posts.map((post) => (
        <li
          id={post.id}
          key={post.metadata.slug}
          className={`flex ${isSide ? "flex-col gap-1" : "flex-col sm:flex-row gap-2 md:gap-4"} items-start w-full`}
        >
          <div className={`w-full ${!isSide && "sm:max-w-[75%] md:max-w-[80%]"}`}>
            <Link
              href={`/blog/${post.metadata.slug}`}
              title={post.metadata.title}
              className={`link-default ${isSide ? "text-xs leading-tight" : "text-sm md:text-base"} block truncate transition-colors duration-300 hover:opacity-80`}
            >
              {isSide && post.metadata.title.length > 25 
                ? `${post.metadata.title.substring(0, 25)}...` 
                : post.metadata.title}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
