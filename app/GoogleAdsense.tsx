"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GoogleAdsense = () => {
  const pathname = usePathname();
  const [is404Page, setIs404Page] = useState(false);
  
  useEffect(() => {
    // 重置状态，当路径变化时
    setIs404Page(false);
    
    // 延迟检测，确保DOM已完全加载
    const timer = setTimeout(() => {
      // 检查方法1: 检查页面标题是否包含404
      const pageTitle = document.title;
      if (pageTitle.includes("404") || pageTitle.includes("不存在") || pageTitle.includes("Not Found")) {
        console.log("检测到404页面 - 标题包含404");
        setIs404Page(true);
        return;
      }
      
      // 检查方法2: 检查页面内容是否包含"返回首页"或"回到首页"
      const pageContent = document.body.innerHTML;
      if ((pageContent.includes("返回首页") || pageContent.includes("回到首页")) && 
          (pageContent.includes("404") || document.querySelector('img[src="/404.svg"]'))) {
        console.log("检测到404页面 - 页面内容包含返回首页和404相关内容");
        setIs404Page(true);
        return;
      }
    }, 300); // 延迟300ms确保DOM已加载
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // 如果是404页面，不加载广告
  if (is404Page) {
    console.log("是404页面，不加载广告");
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
