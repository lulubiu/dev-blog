"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const GoogleAdsense = () => {
  const pathname = usePathname();
  
  // 如果是404页面，不加载广告
  if (pathname === "/404" || pathname.includes("not-found")) {
    return null;
  }

  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID ? (
        <>
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default GoogleAdsense;
