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
                <strong className="font-medium text-white">怎么赚钱？低买高卖。如何变富有？赚的比花的多 -2024.07.11</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">做真正喜欢的事情时，是没有坚持这一说的 -2024.06.29</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">做的是指数增长的事情，就不要想得到线性增长的结果 -2024.06.10</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">当做一个选择时，当然会有风险存在。
                  但不做任何选择，就一定没有风险吗。
                  有没有可能，不做选择才是最大的风险 -2024.05.29</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不对别人有期待，只对自己有要求 -2024.05.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">意见就是意见，它不是命令，不是决策。可以不接受，但要多听 -2024.05.09</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">所谓的问题，大概率不是能力问题，就是意愿问题 -2024.04.24</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">各种 try ，好过原地等待 -2024.04.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不夸大自己，也不贬低自己 -2024.04.13</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">评价总是很容易，做到却是不容易 -2024.04.12</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不止要尽一己之力，还要会借他人之力，这才是“尽力”-2024.04.06</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">感觉带来尝试，尝试带来经验，经验带来能力，能力带来自信 -2024.03.24</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">拥有的不是太少了，而是太多了 -2024.03.24</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">为什么说“焦虑的反面是具体”，是因为把面对的困难/挑战，一一写下来的时候，就是在面对它，在思考如何解决。
                  选择面对而不是逃避之后，焦虑也就不复存在 -2024.03.23</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">“找”字上面加一点，就是“我”字。
                  从造字方面就能看出，其实“我”的一生，就是寻找自己独特的那一点的一生 -2024.03.21</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white"> 谈不上高调低调，性格如此罢了 -2024.03.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">事情不管多难，都会被做到。不过是一个时间 & 精力的问题 -2024.03.13</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">没有成功或者失败，只有这种方法行不行得通 -2024.03.06</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">没有绝对的对与错，放弃寻求答案吧～ -2024.02.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不敢说自己是独立思考，只能说我在按照自己的想法在生活 -2024.02.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">一个人最容易欺骗的就是自己。
                  欺骗别人还需要找理由，而欺骗自己，一个理由都不需要。
                  所以要对自己诚实，无限诚实 -2024.02.05</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">求同容易，存异难啊 -2024.02.03</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">事情做错了，并不代表你这个人就错了。
                  只能说明你目前的认知没到位，方法错了，其他什么也说明不了 -2024.02.03</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">每个人都有自己的叙事，在这个叙事中，有多少是事实，有多少是感受，有多少是自己的想象呢 -2024.02.02</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">前期大量看，后期大量干 -2024.01.30</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">怎么练本事？做事，多做事，做成事 -2024.01.30</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">一段关系，从开始到结束，都不是一个人能决定的 -2024.01.28</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">关注点不要在“我能不能做到 xxx”上，要在“我如何才能做到 xxx” -2024.01.25</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">人还是要爱着点什么才好。
                  这样陷入某种虚无之中时，所爱之事，可以慢慢把人拉回到现实中来 -2024.01.24</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">太在乎别人，大概是因为没有那么在乎自己 -2024.01.22</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">专注于做正确的事，而不是做正确的人 -2024.01.18</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">最好不要开别人玩笑，开不好就不是幽默了，而是尴尬。
                  自嘲倒是可以 -2024.01.18</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">零期待，一切皆是惊喜 -2024.01.18</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不要因为一两次的成功就沾沾自喜，没准只是运气好而已 -2024.01.12</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">少说，多做。少想，多看。少思，多践。 -2024.01.11</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">自己成为自己的凭借 -2024.01.01</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">在关系里面，如果能够看到彼此的付出，或许就能少一些争执 -2023.12.12</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">没有好坏，皆是体验 -2023.11.22</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">人生要解决的问题非常多。
                  所以，遇到很多问题时，倒也不必太慌张，毕竟多一个也不多；
                  如果没有遇到很多问题，倒也不必太自得，毕竟少一个也不少 -2023.11.10</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">相信自己的能力被人需要，但不因此而骄傲 -2023.11.10</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不必和他人比较，因为他人和你的目的地不一定相同 -2023.10.11</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">目前我要修的课题之一：要接受有些事情的结果就是无形的 -2023.10.08</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">80% 的问题，要问的不是别人，而是自己。
                  为了得到，愿意放弃什么，承受什么，做到什么程度；
                  这些答案都在你自己身上，不在他人身上 -2023.10.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">希望这个世界因为我的出现，变好了那么一点点。希望我对于这个世界来说，是个有用的、有价值的人 -2023.10.04</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">先做人，再做事 -2023.10.01</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">谁负责，谁决策 -2023.09.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">如果得不到自己想要的，只能说明自己目前还配不上，除此之外，没有其他可能。
                  所以要做的是，去看/分析，是哪里自己没有配上，然后去完善，让自己配得上。
                  就这么简单 -2023.09.23</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">每个选择背后都有代价。第一是看，有没有意识到这个代价；第二是看，能不能接受这个代价 -2023.09.16</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不要过度思考 -2023.09.10</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">别想没用的，做点有用的 -2023.08.20</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white"> 在人间，祝我玩得开心 -2023.08.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">用更长的时间去完善自己 -2023.07.23</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white"> 每个人，都有自己的课题要修 -2023.07.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">纠结，本质上是一个取舍问题 -2023.07.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">少讲理论，多讲细节，多讲实操 -2023.07.14</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不仅仅是要与人为善，更要对这世间的万物都抱有善意 -2023.07.14</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">可以自信，不可过度 -2023.07.09</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">与其问怎么才能赚到钱，不如问一问：我能帮助到什么人，他们为什么需要我的帮助，凭什么是我而不是别人 -2023.07.08</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">我不曾拥有过任何人，我可能连我自己都未曾拥有过 -2023.07.07</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">给别人提建议的时候，问问自己：我有资格吗？我比他更有智慧吗？ -2023.07.04</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">永远都做个实干家 -2023.06.16</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">没有好消息，坏消息，只有消息。 -2023.06.07</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">你想要的答案，在你自己手里 -2023.05.25</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">比有所为更难的是，有所不为 -2023.05.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">可以选择去解决问题，也可以选择让问题变得无关紧要 -2023.05.03</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">比起你想要什么，更重要的是你愿意为此付出什么 -2023.04.28</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">重要的不是去抓风口，而是去寻找适合自己的。不要盲目，要专注 -2023.04.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">对当下的我来说，最重要的两件事：体验 & 陪伴 -2023.04.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">别太担心，你有能力在这个时代谋生。别太焦虑，你有一辈子的时间去做事情 -2023.04.26</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">梦里梦到的人，醒来就去见见 ta。生活就是这样简单而又美好啊 -2023.04.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">渡人之前，先自渡 -2023.04.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">比做了什么更重要的是，你选择了什么 -2023.04.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">要把时间精力，放在对你来说重要的人身上 -2023.04.26</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">定最高的目标，做最坏的打算，尽最大的努力 -2023.04.17</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">你不能既要又要还要且要，总得选一样 -2023.04.16</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">要建立自己的评价体系 -2023.04.16</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">任何问题，到最后大概率是 权衡/取舍 的问题 -2023.04.05</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">勿骄勿躁，人生这么长，这才哪儿到哪儿 -2023.03.19</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">总不能一直做正确的选择，偶尔也要做一些自己喜欢的选择 -2023.03.19</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">怎样的教育才算是好的教育。我所谓的“为别人好”，是真的为对方好，还是只是为了满足我个人的一些私欲 -2023.03.19</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">成就感/价值感 这些虽然没办法量化，没办法讲出来，但你有没有获得它，心知肚明 -2023.03.19</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">当你能为别人提供价值时，真正意义上的连接就发生了 -2023.03.18</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white"> 和公司的关系，不是雇佣关系，而是合作关系 -2023.03.10</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">为人正直，待人友善，做个好人 -2023.03.03</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不能因为别人没有期待你回馈，就不做自己应该做的事 -2023.02.25</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">自己永远都是自己的第一责任人 -2023.02.25</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">赚钱不是目的，更好的生活才是 -2023.02.20</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">没啥大的理想，只想吃吃喝喝玩玩乐乐度过这一生 -2023.02.19</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不是所有的事情，都一定要有意义 -2023.02.19</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">一个人没办法被改变，但可以被影响 -2023.02.18</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">要活的，坦荡又自由 -2023.02.16</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">只启发，不教育 -2023.02.02</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">我理想的生活状态：做事只为喜不喜欢，不为钱 -2023.02.01</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white"> 能让别人开心的话，就多讲讲。反正讲话不要钱 -2023.01.28</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">善始的人很多，能善终的人很少 -2023.01.26</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">钱，能解决 80% 甚至是 90% 的问题，剩下不能解决的问题，不解决也罢 -2023.01.23</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">原则之一：不给人建议，除非给钱 -2023.01.20</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">人这一生，不应该是被欲望捆绑的一生 -2023.01.16</strong>
              </a>
            </li>
            
            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">接水只接半杯水 -2023.01.15</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">以后不买纸质书，除非是买来送人 -2023.01.11</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">不要争输赢/辩输赢。要做到输或赢 -2023.01.01</strong>
              </a>
            </li>

            <li>
              <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-white">永远不要在关系里面算账 -2022.12.31</strong>
              </a>
            </li>
            
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
