'use client';

import Script from 'next/script';

export default function GoogleAdsense() {
  const isProduction = process.env.NODE_ENV === 'production';
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  if (!isProduction || !adsenseId) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      strategy="lazyOnload"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
    />
  );
} 