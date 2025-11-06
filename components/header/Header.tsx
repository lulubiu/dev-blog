import HeaderLinks from "@/components/header/HeaderLinks";
import SearchBar from "@/components/header/SearchBar";
import HeaderMenu from "./HeaderMenu";
import { siteConfig } from "@/config/site";
import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const Header = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <header className="flex z-40 w-full h-auto py-2 px-2 items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70">
      <nav className="z-40 flex px-0 md:px-6 gap-2 md:gap-4 w-full flex-row relative flex-nowrap items-center h-[var(--navbar-height)] max-w-[1024px]">
       <div className="flex items-center md:gap-x-12">
          <Link href="/" className="flex items-center space-x-1 font-bold">
            <Image
              alt={siteConfig.name}
              src="/logo.svg"
              className="w-6 h-6 md:w-8 md:h-8"
              width={24}
              height={24}
            />
            <span className="text-stone-400 text-xs md:text-base hidden sm:block">Developer.lulu 的个人博客</span>
          </Link>
          <div className="hidden md:flex md:gap-x-6"></div>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-4 h-12 w-full max-w-fit rounded-full px-4 bg-[hsl(var(--main)/0.8)]">
          <HeaderMenu />
        </div>

        <div className="flex md:hidden items-center flex-1 justify-center min-w-0 mx-2">
          <HeaderMenu />
        </div>

        <div className="flex items-center gap-1 md:gap-4 shrink-0">
          <SearchBar posts={posts} />
          <HeaderLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
