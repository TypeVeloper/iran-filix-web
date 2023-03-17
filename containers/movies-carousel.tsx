import BannerCard from "@components/common/banner-card";import Carousel from "@components/ui/carousel/carousel";
import { MoviesType } from "@framework/types";
import cn from "classnames";
import Link, { LinkProps } from "next/link";
import type { FC } from "react";
import { SwiperSlide } from "swiper/react";

interface Props {
  data: MoviesType[];
  className?: string;
  href: LinkProps["href"];
  title: string;
}

const breakpoints = {
  "1025": {
    slidesPerView: 5.5,
    spaceBetween: 40,
  },
  "480": {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  "0": {
    slidesPerView: 5,
    spaceBetween: 10,
  },
};
const MovieCarousel: FC<Props> = ({ data, className, title, href = "/" }) => {
  return (
    <div className={`w-auto flex flex-col gap-5 mt-5 ${cn(className)}`}>
      <Link href={href}>
        <div className='flex gap-3 items-center'>
          <p>{title}</p>
          <div className='w-28 relative h-1 mt-1 border-b-[1px] border-gray-700'>
            <span className='w-10 h-5 bg-heading absolute -top-[250%] right-2 rounded-xl'></span>
          </div>
        </div>
      </Link>
      <Carousel
        autoplay={false}
        breakpoints={breakpoints}
        navigation={true}
        loop={false}
        carouselClassName='!py-6'>
        {data?.map((item) => {
          return (
            <SwiperSlide key={`movie-carousel-item-${item.id}`}>
              <BannerCard
                movieType={item.type}
                href={`potplayer://${item.sources[0]?.url}`}
                imgUrl={item.image}
                title={item.title}
                imdb={item.imdb}
                rating={item.rating}
              />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
