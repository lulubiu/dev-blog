"use client";
import Link from "next/link";
import { useEffect, useState, useCallback, useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Heading {
  text: string;
  id: string;
  level: string;
}

const TOC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // 使用 useCallback 优化 DOM 查询
  const extractHeadings = useCallback(() => {
    const articleElement = document.getElementById("article");
    if (!articleElement) return [];

    return Array.from(
      articleElement.querySelectorAll("h2, h3")
    ).map((heading) => ({
      text: heading.textContent?.trim() || "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    })).filter(heading => heading.text && heading.id);
  }, []);

  // 使用 Intersection Observer 优化滚动性能
  useEffect(() => {
    const extractedHeadings = extractHeadings();
    setHeadings(extractedHeadings);

    if (extractedHeadings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0]);
        }
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.1
      }
    );

    extractedHeadings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [extractHeadings]);

  // 记忆化渲染的标题列表
  const renderedHeadings = useMemo(() => {
    return headings.map(({ text, id, level }) => (
      <li 
        key={id} 
        className={`my-2 ${level === "H3" ? "ml-4" : ""}`}
      >
        <Link 
          href={`#${id}`} 
          title={text} 
          className={`text-sm transition-colors duration-200 truncate inline-block max-w-[180px] ${
            activeId === id 
              ? "text-mainHover font-medium" 
              : "hover:text-mainHover"
          }`}
        >
          {text}
        </Link>
      </li>
    ));
  }, [headings, activeId]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <ScrollArea className="w-full rounded-md border border-gray-600">
      <div className="p-4">
        <h4 className="text-sm font-medium leading-none mb-4 text-center text-main">目录</h4>
        <ul>
          {renderedHeadings}
        </ul>
      </div>
    </ScrollArea>
  );
};

export default TOC;
