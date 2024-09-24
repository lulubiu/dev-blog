import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <Link href="/" title="首页" className="link-default">
        首页
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link href="/think" title="一些思考" className="link-default">
        一些思考
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link href="/daily" title="日常碎碎念" className="link-default">
         日常碎碎念
      </Link>
    </>
  );
};

export default HeaderMenu;