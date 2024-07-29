import { siteConfig } from "@/config/site";

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `日常碎碎念 | Developer.lulu`,
  };
}

export default async function Page() {
  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-12"></div>
      <div className="w-full md:w-3/5 px-6">
        <h1>日常碎碎念</h1>
        <p>分享我平时的一些碎碎念，每一句都很短，总结在一起就很长。</p>
        
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
          <div className="flex items-center gap-4">
            <img
              alt=" 网站logo"
              src="./logo.png"
              className="size-16 rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-medium text-white">Developer.lulu</h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a href="https://lulubiu.com/" className="text-xs font-medium text-gray-300"> WebSite </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="https://github.com/zll-0405" className="text-xs font-medium text-gray-300"> GitHub </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">我所知不全，所见不全，不知确切答案 -2022.12.30</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">如果你对别人好，希望别人也对自己好，
                  这不是友谊，是交易 -2022.12.24</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">给自己打上标签的时候，因为这个标签别人得以快速对你有个认知，但同时自己也在被这个标签限制。
                  我们得到一些时，必然会失去另外一些，只是看自己有没有意识到 -2022.12.22</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">存钱的目的，是为了提高自己抗风险的能力 -2022.11.27</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">所谓一见钟情，不过是见色起意。所谓日久生情，不过是权衡利弊 -2022.11.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">一个不成熟的想法：每个人都希望 被关注/被看到/被需要/被偏爱 -2022.11.01</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">一个人越能看见自己，也越能看到别人，也越难轻易对别人下判断 -2022.10.30</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">可以没有离职的想法，但要保证自己随时都有可以离职的能力与底气 -2022.10.27</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">越是忙的时候，越要照顾好自己，特别是身体/睡眠/情绪 -2022.10.18</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">很多事情都不是简单的是与非，黑与白，它恰好处于是与非之间，黑与白之间 -2022.10.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">当一个人向内求安全感时，他可以找到答案，如果是向外求，可能找不到，大概率还会失望 -2022.10.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">任何关系的破裂，都不是一个人的问题 -2022.09.20</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">对自己可以满意，但是不能满足 -2022.09.18</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">自己想要改变，改变才会真的发生 -2022.09.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">相对能力来说，一个人性格，人品更重要。能力可以培养，而一个人靠不靠谱，诚不诚实，不是培养就可以的 -2022.09.04</strong>
              </a>
            </li>

          </ul>
        </article>

      </div>
    </div>
  );
}
