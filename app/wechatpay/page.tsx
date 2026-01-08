export default function WechatPay() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900 to-emerald-950/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-slate-500/20 blur-3xl"
      />
      <main className="relative mx-auto flex w-full max-w-lg items-start justify-center px-6 py-4 md:py-6">
        <section
          className="w-full p-4 md:p-5 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <div className="mt-4 flex justify-center">
            <div className="rounded-2xl border border-slate-700/60 bg-white p-4 shadow-inner">
              <img
                src="/wechatpay.png"
                alt="微信赞赏码"
                className="h-52 w-52 object-contain sm:h-56 sm:w-56"
              />
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <p>微信扫码赞赏 | 今日份超大杯开心 🍭</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <p>赞赏备注会被认真阅读，谢谢你的鼓励 😆</p>
            </div>
          </div>
          <a
            href="/"
            className="group relative mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-slate-800"
          >
            <span>回到首页</span>
          </a>
        </section>
      </main>
    </div>
  );
}
