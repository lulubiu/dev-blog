import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <Link href="/" title="首页" className="link-default text-xs md:text-base">
        首页
      </Link>
      <div className="text-gray-600 text-xs md:text-base mx-1 md:mx-2">|</div>
      <Link href="/think" title="一些思考" className="link-default text-xs md:text-base">
        思考
      </Link>
      <div className="text-gray-600 text-xs md:text-base mx-1 md:mx-2">|</div>
      <Link href="/daily" title="日常碎碎念" className="link-default text-xs md:text-base">
        日常
      </Link>
    </>
  );
};

export default HeaderMenu;