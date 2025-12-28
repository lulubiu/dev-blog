export default function Coffee() {
  return (
    <div className="mx-automax-h-screen flex flex-col items-center">
        <img src="wechatpay.png" alt="赞赏码" width="25%" height="25%"/>
        <div className="text-center mt-4 flex flex-col sm:flex-row">
            <ul className="mt-4 space-y-2">
                <li>
                    <a href="/" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                        <strong className="font-medium text-white">感谢您的赞赏，今日份超大杯开心</strong>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}