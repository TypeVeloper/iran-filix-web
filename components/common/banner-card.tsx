import Button from "@components/ui/button";import { MoviesTypeType } from "@framework/types";
import cn from "classnames";
import Image from "next/image";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
interface BannerProps {
  title: string;
  imgUrl: string;
  variant?: "rounded" | "default";
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps["href"];
  movieType: MoviesTypeType;
  imdb: number;
  rating: number;
  carouselMode?: boolean;
}

const BannerCard: FC<BannerProps> = ({
  title,
  imgUrl,
  className,
  variant = "rounded",
  effectActive = false,
  classNameInner,
  href,
  movieType,
  imdb,
  rating,
  carouselMode,
}) => {
  const router = useRouter();
  // const viewport = useISInViewport();
  return (
    <div className={cn("mx-auto relative select-none group h-full", className)}>
      <div className=' relative w-44 h-[80%] flex flex-col'>
        <div
          onClick={() => {
            router.push("/");
          }}
          className={cn(
            "h-full group-hover:scale-105 transition-all cursor-pointer group-hover:-translate-y-1 flex justify-center relative overflow-hidden  z-30",
            classNameInner,
          )}>
          <Image
            src={imgUrl}
            width={300}
            height={300}
            alt={title}
            quality={100}
            className={cn(
              "bg-gray-300 object-cover !min-h-max !h-full w-full",
              {
                "rounded-md": variant === "rounded",
              },
            )}
          />
          {effectActive && (
            <div className='absolute top-0 -start-full h-full w-1/2 z-5 block transform -left-[100%] -skew-x-12 bg-gradient-to-r transition-all from-transparent to-white opacity-40 group-hover:animate-shine' />
          )}
          <div className='absolute -bottom-[40%] transition-all p-4 group-hover:bottom-0 w-full h-[40%] rounded-t-lg flex flex-col items-center justify-between bg-body/60'>
            <div className='w-full flex  justify-between'>
              <span>IMDB: {imdb}</span>
              <span>Star:{rating}</span>
            </div>
            <Button
              disabled={movieType === "serie"}
              onClick={(e) => {
                e.stopPropagation();
                router.push(href);
              }}
              className='w-full !h-9 py-2'
              variant='slim'>
              {" "}
              watch now{" "}
            </Button>
          </div>
        </div>
        {movieType === "serie" ? (
          <div className='absolute top-0 h-full w-full  '>
            <div
              style={{ backgroundImage: `url(${imgUrl})` }}
              className='border-[1px] h-full w-[96%] opacity-80 z-20 group-hover:-top-3 -top-2 transition-all bg-body absolute  right-[50%] translate-x-[50%] border-gray-700 rounded-md'></div>
            <div
              style={{ backgroundImage: `url(${imgUrl})` }}
              className='border-[1px] h-full w-[90%] z-10 opacity-40 group-hover:-top-4 -top-3 transition-all bg-body delay-100 absolute right-[50%] translate-x-[50%] border-gray-700 rounded-md'></div>
            <div
              style={{ backgroundImage: `url(${imgUrl})` }}
              className='border-[1px] h-full w-[85%] z-0 opacity-20 group-hover:-top-5 -top-4 transition-all bg-body delay-200 absolute right-[50%] translate-x-[50%] border-gray-700 rounded-md'></div>
          </div>
        ) : (
          <div
            className='absolute w-full h-full top-2 blur-sm scale-95 '
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        )}
      </div>
      <p className='text-md mt-3'>{title}</p>
    </div>
  );
};

export default BannerCard;
