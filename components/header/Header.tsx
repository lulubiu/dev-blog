import HeaderLinks from "@/components/header/HeaderLinks";
import SearchBar from "@/components/header/SearchBar";
import HeaderMenu from "./HeaderMenu";
import { siteConfig } from "@/config/site";
import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const Header = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <header className="mx-auto max-w-5xl px-4 py-3 border-b sticky top-0 bg-background z-50">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" className="flex items-center space-x-1 font-bold">
            <Image
              alt={siteConfig.name}
              src="/logo.svg"
              className="w-8 h-8"
              width={24}
              height={24}
            />
            <span className="text-stone-400 hidden sm:block">Developer.lulu 的个人博客</span>
          </Link>
          <div className="hidden md:flex md:gap-x-6"></div>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-4 h-12 w-full max-w-fit rounded-full px-4 bg-[hsl(var(--main)/0.8)]">
          <HeaderMenu />
        </div>

        <div className="flex items-center">
          <SearchBar posts={posts} />
          <HeaderLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
