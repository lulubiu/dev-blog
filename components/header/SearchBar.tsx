"use client";
import { Input } from "@/components/ui/input";
import { createIndex } from "@/lib/loadIndex";
import { doSearch } from "@/lib/search";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/types/blog";
import { SearchResult } from "@/types/search";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";
import { HighlightMatches } from "./HighlightMatches";
import { debounce } from 'lodash';

const SearchBar = ({ posts }: { posts: BlogPost[] }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  createIndex({ documents: posts });

  // 防抖搜索函数
  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      if (!value.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(false);
      try {
        const searchResults = await doSearch(value);
        setResults(searchResults);
      } catch (e) {
        setError(true);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  // 搜索输入变化处理
  const onChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    setShow(Boolean(value));
  }, []);

  // 完成搜索
  const finishSearch = useCallback(() => {
    setQuery("");
    setShow(false);
    setResults([]);
  }, []);

  // 监听查询变化并执行防抖搜索
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]); 

  return (
    <>
      <Input
        value={query}
        onChange={onChangeSearch}
        onFocus={() => {
          setShow(true);
        }}
        onBlur={() => {
          setShow(false);
        }}
        placeholder="Search..."
        className="border-gray-600 focus:border-0 rounded-full w-16 md:w-auto h-8 md:h-10 text-xs md:text-sm px-2 md:px-3"
      />

      <Transition
        show={show}
        // Transition.Child is required here, otherwise popup will be still present in DOM after focus out
        as={Transition.Child}
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          className={cn(
            "scrollbar",
            "rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",
            "p-2 md:p-4 border border-gray-600 bg-gray-900",
            "absolute top-full right-0 z-20 mt-2 overflow-auto overscroll-contain rounded-xl py-2 md:py-2.5 shadow-xl",
            "min-h-[100px] max-h-[300px] md:max-h-[400px]",
            "w-[90vw] sm:w-[400px]"
          )}
          style={{
            transition: "max-height .2s ease", // don't work with tailwindcss
          }}
        >
          {error ? (
            <span className="block select-none p-4 md:p-8 text-center text-xs md:text-sm text-gray-400">
              {error}
            </span>
          ) : results && results.length > 0 ? (
            results.map((result, index) => (
              <Link
                key={`${result.id}_${index}`}
                // get the right url
                href={`/blog/${result.id.split("_")[0]}`}
                onClick={finishSearch}
              >
                <li
                  className={cn(
                    "break-words rounded-md cursor-default select-none",
                    "contrast-more:border",
                    "text-gray-800 contrast-more:border-transparent dark:text-gray-300",
                    "hover:bg-primary-500/10 hover:text-primary-600 contrast-more:hover:border-primary-500",
                    "block scroll-m-12 px-2 md:px-2.5 py-1.5 md:py-2"
                  )}
                >
                  <div className="text-sm md:text-base font-semibold leading-5">
                    <HighlightMatches match={query} value={result.doc.title} />
                  </div>
                  <div className="excerpt mt-1 text-xs md:text-sm leading-[1.25rem] md:leading-[1.35rem] text-gray-600 dark:text-gray-400 contrast-more:dark:text-gray-50">
                    <HighlightMatches
                      match={query}
                      value={result.doc.content}
                    />
                  </div>
                </li>
              </Link>
            ))
          ) : (
            <span className="block select-none p-4 md:p-8 text-center text-xs md:text-sm text-gray-400">
              没有找到结果
            </span>
          )}
        </ul>
      </Transition>
    </>
  );
};

export default SearchBar;
