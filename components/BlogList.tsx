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
    <ul className={`flex flex-col ${isSide ? "gap-4" : "gap-3 md:gap-4"} w-full`}>
      {posts.map((post) => (
        <li
          id={post.id}
          key={post.metadata.slug}
          className={`flex ${isSide ? "flex-col sm:flex-row gap-4" : "flex-col sm:flex-row gap-2 md:gap-4"} items-start w-full`}
        >
          {!isSide && (
            <span className="text-[#8585a8] min-w-28">
              {dayjs(post.metadata.date).format("YYYY-MM-DD")}
            </span>
          )}
          <Link
            href={`/blog/${post.metadata.slug}`}
            title={post.metadata.title}
            className={`link-default ${isSide ? "truncate" : "text-sm md:text-base truncate"} transition-colors duration-500 ease-in-out`}
          >
            {post.metadata.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
