'use client';

import Script from 'next/script';
import { memo } from 'react';

const GoogleAdsense = memo(() => {
  const isProduction = process.env.NODE_ENV === 'production';
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  if (!isProduction || !adsenseId) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      strategy="worker" // 使用 worker 策略减少主线程阻塞
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      onLoad={() => {
        // 延迟初始化广告
        if (typeof window !== 'undefined') {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        }
      }}
      onError={(e) => {
        console.warn('AdSense script failed to load:', e);
      }}
    />
  );
});

GoogleAdsense.displayName = 'GoogleAdsense';

export default GoogleAdsense; 