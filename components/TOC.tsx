"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const TOC = () => {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: string }[]
  >([]);

  useEffect(() => {
    const articleElement = document.getElementById("article");
    if (!articleElement) return;

    const extractedHeadings = Array.from(
      articleElement.querySelectorAll("h2, h3")
    ).map((heading) => ({
      text: heading.textContent || "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    }));

    setHeadings(extractedHeadings);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <ScrollArea className="w-full rounded-md border border-gray-600">
      <div className="p-4">
        <h4 className="text-sm font-medium leading-none mb-4 text-center text-main">目录</h4>
        <ul>
          {headings.map(({ text, id, level }) => (
            <li 
              key={id} 
              className={`my-2 ${level === "H3" ? "ml-4" : ""}`}
            >
              <Link 
                href={`#${id}`} 
                title={`#${id}`} 
                className="text-sm hover:text-mainHover truncate inline-block max-w-[180px] transition-colors duration-200"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
};

export default TOC;
