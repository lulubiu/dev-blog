import { Metadata } from 'next';
import NotFoundClient from './not-found-client';

export const metadata: Metadata = {
  title: "404 - 页面不存在",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: undefined,
  }
};

export default function NotFound() {
  return <NotFoundClient />;
} 