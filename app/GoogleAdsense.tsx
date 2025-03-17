"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GoogleAdsense = () => {
  const pathname = usePathname();
  const [is404Page, setIs404Page] = useState(false);
  
  useEffect(() => {
    // 在客户端检测是否为404页面
    // 方法1：检查页面标题是否包含404
    const pageTitle = document.title;
    if (pageTitle.includes("404") || pageTitle.includes("Not Found")) {
      setIs404Page(true);
      return;
    }
    
    // 方法2：检查页面内容是否包含特定的404元素
    // 这里我们假设404页面有一个特定的元素或类名
    const notFoundElement = document.querySelector('img[src="/404.svg"]');
    if (notFoundElement) {
      setIs404Page(true);
      return;
    }
  }, [pathname]);

  // 如果是404页面，不加载广告
  if (is404Page) {
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
