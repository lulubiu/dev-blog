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
      <div className="hidden md:block text-gray-600">|</div>
      <Link href="/daily" className="link-default">
         日常碎碎念
      </Link>
    </>
  );
};

export default HeaderMenu;