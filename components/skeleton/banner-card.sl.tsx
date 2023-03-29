import cn from "classnames";import { useRouter } from "next/router";
import type { FC } from "react";

const BannerCardSkeleton: FC = ({}) => {
  const router = useRouter();
  // const viewport = useISInViewport();
  return (
    <div className={cn("mx-auto relative select-none group h-full")}>
      <div className=' relative w-44 h-[250px] flex flex-col bg-gray-600 rounded-lg animate-pulse dark:bg-gray-700'></div>
    </div>
  );
};

export default BannerCardSkeleton;
