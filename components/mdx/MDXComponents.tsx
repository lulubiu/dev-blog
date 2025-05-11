import { Aside } from "@/components/mdx/Aside";
import { Callout } from "@/components/mdx/Callout";
import { MdxCard } from "@/components/mdx/MdxCard";
import React, { ReactNode } from "react";
import Image from 'next/image';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = children?.toString() ?? "";

  return (
    <HeadingTag id={headingId} className={className}>
      {children}
    </HeadingTag>
  );
};

interface MDXComponentsProps {
  [key: string]: React.FC<any>;
}

const MDXComponents: MDXComponentsProps = {
  h1: (props) => (
    <Heading level={1} className="text-2xl md:text-4xl font-bold mt-6 mb-4" {...props} />
  ),
  h2: (props) => (
    <Heading
      level={2}
      className="text-xl md:text-3xl font-semibold mt-6 mb-4 border-b-2 border-gray-200 pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      level={3}
      className="text-lg md:text-2xl font-semibold mt-6 mb-4"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading level={4} className="text-base md:text-xl font-semibold mt-6 mb-4" {...props} />
  ),
  h5: (props) => (
    <Heading level={5} className="text-sm md:text-lg font-semibold mt-6 mb-4" {...props} />
  ),
  h6: (props) => (
    <Heading
      level={6}
      className="text-xs md:text-base font-semibold mt-6 mb-4"
      {...props}
    />
  ),
  hr: (props) => <hr className="border-t border-gray-600" {...props} />,
  p: (props) => <p className="mt-4 mb-4 text-sm md:text-base" {...props} />,
  a: (props) => (
    <a
      className="link-underline text-sm md:text-base"
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc pl-4 md:pl-5 mt-0 mb-4 text-sm md:text-base" {...props} />,
  ol: (props) => <ol className="list-decimal pl-4 md:pl-5 mt-0 mb-4 text-sm md:text-base" {...props} />,
  li: (props) => <li className="mb-2 text-sm md:text-base" {...props} />,
  code: (props) => (
    <code
      className="bg-gray-600 rounded px-[0.2rem] md:px-[0.3rem] py-[0.1rem] md:py-[0.2rem] font-mono text-xs md:text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="bg-gray-600 rounded p-2 md:p-4 overflow-x-auto my-2 text-xs md:text-sm" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-3 md:pl-4 border-l-4 border-gray-200 my-4 text-gray-300 italic text-sm md:text-base"
      {...props}
    />
  ),
  img: (props) => (
    <img width="100%" className="rounded border-2 md:border-4 border-main" {...props} />
  ),
  strong: (props) => <strong className="font-bold" {...props} />,
  table: (props) => (
    <div className="my-4 md:my-6 w-full overflow-x-auto">
      <table
        className="w-full text-gray-200 bg-gray-800 shadow-lg rounded-lg text-xs md:text-sm"
        {...props}
      />
    </div>
  ),
  tr: (props) => <tr className="border-t border-gray-500" {...props} />,
  th: (props) => (
    <th
      className="px-2 md:px-4 py-1 md:py-2 font-bold text-left bg-gray-900 text-white [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-2 md:px-4 py-1 md:py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  Aside,
  Callout,
  Card: MdxCard,
  Image: Image,
};

export default MDXComponents;
