import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <Link href="/" title="首页" className="link-default text-xs md:text-base px-2 md:px-0">
        首页
      </Link>
      <div className="text-gray-600 text-xs md:text-base mx-2 md:mx-2">|</div>
      <Link href="/think" title="一些思考" className="link-default text-xs md:text-base px-2 md:px-0">
        思考
      </Link>
      <div className="text-gray-600 text-xs md:text-base mx-2 md:mx-2">|</div>
      <Link href="/daily" title="日常碎碎念" className="link-default text-xs md:text-base px-2 md:px-0">
        日常
      </Link>
    </>
  );
};

export default HeaderMenu;