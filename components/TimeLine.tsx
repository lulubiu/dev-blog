import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PostsByMonth } from "@/types/blog";
import Link from "next/link";

export default async function TimeLine({
  postsByMonth,
}: {
  postsByMonth: PostsByMonth;
}) {
  return (
    <ScrollArea
      className="h-40 md:h-auto md:max-h-[460px] w-full md:w-full rounded-md border border-gray-600 md:sticky md:top-20"
      style={{ position: "relative" }}
    >
      <div className="p-3 md:p-4">
        <h4 className="mb-3 md:mb-4 text-sm font-medium leading-none text-center md:text-left">
          <Link href="/" className="text-main hover:text-mainHover">Time Line</Link>
        </h4>
        <div className="flex md:flex-col flex-row flex-wrap gap-3 md:gap-2 justify-center md:justify-start">
          {Object.keys(postsByMonth).map((month) => (
            <div key={month} className="md:w-full">
              <Link 
                href={`#${month}`} 
                className="whitespace-nowrap text-xs md:text-sm block text-center md:text-left hover:text-mainHover transition-colors duration-200"
              >
                {month}
              </Link>
              <Separator className="my-2 bg-gray-600 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
