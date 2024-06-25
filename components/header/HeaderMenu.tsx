import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <Link href="/" className="link-default">
        首页
      </Link>
      <div className="hidden md:block text-gray-600">|</div>
      <Link href="/think" className="link-default">
        一些思考
      </Link>
    </>
  );
};

export default HeaderMenu;