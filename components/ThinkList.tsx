import { BlogPost } from "@/types/blog";
import dayjs from "dayjs";
// import Link from "next/link";
import { Link } from "next-view-transitions";

export default async function ThinkList({
  isSide,
  posts,
}: {
  isSide?: boolean;
  posts: BlogPost[];
}) {
  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          {isSide ? (
            <></>
          ) : (
            <span className="text-[#8585a8] min-w-28">
              {dayjs(post.metadata.date).format("YYYY-MM-DD")}
            </span>
          )}
          <Link
            href={`/think/${post.slug}`}
            title={post.title}
            className="link-default truncate transition-colors duration-500 ease-in-out"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
