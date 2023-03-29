import HeroSliderSkeleton from "@components/skeleton/hreo-slider.sl";import Button from "@components/ui/button";
import Carousel from "@components/ui/carousel/carousel";
import { MoviesType } from "@framework/types";
import Image from "next/image";
import React from "react";
import { useInterval } from "react-use";
import { SwiperSlide } from "swiper/react";

interface Props {
  className?: string;
  isLoading?: boolean;
  data: MoviesType[] | undefined;
}
const HeroResponsiveBreakpoints = {
  "0": {
    slidesPerView: 3,
    spaceBetween: 3,
  },
};

const HeroNewMovie: React.FC<Props> = ({
  className = "mb-12 md:mb-14 xl:mb-16",
  data,
  isLoading,
}) => {
  const [movies, setMovies] = React.useState<Array<MoviesType>>([]);
  const [currentSlide, setCurrentSlide] = React.useState<MoviesType | null>(
    movies[0] ? movies[0] : null,
  );
  // const prevSlide = usePrevious(currentSlide);
  const [isChanging, setIsChanging] = React.useState<boolean>(false);

  const [countTime, setCountTime] = React.useState(0);
  const delay = 10000;
  useInterval(() => {
    setCountTime((prev) => prev + 1);
  }, (delay / delay) * 11);

  React.useEffect(() => {
    if (data) {
      setMovies(data);
    }
    return () => {
      setMovies([]);
    };
  }, [data]);

  if (movies.length < 1 || isLoading) {
    return <HeroSliderSkeleton />;
  }

  const handleSetCurrentSlide = (idx: number) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentSlide(() => {
        setIsChanging(false);
        return movies[idx];
      });
    }, 500);
  };

  return (
    <div
      className={` hero-slide w-full h-[500px] mt-10 flex items-center justify-center relative  rounded-xl  ${className} `}>
      {/* <ProgressBar level={countTime} className='absolute bottom-0 ' /> */}
      <>
        <div
          className={`w-full h-full overflow-hidden !bg-cover !bg-top  ${
            isChanging ? "  !blur-xl opacity-10" : "!blur-md opacity-100"
          } !bg-no-repeat transition-all duration-500  `}
          style={{
            backgroundImage: `linear-gradient(190deg, #000000 , #0000 50%) , url(${currentSlide?.cover})`,
          }}></div>
        <div className='absolute top-0 left-20 flex flex-col items-start h-full w-[50%] text-left p-10 justify-center gap-10'>
          <h1 className='text-3xl h-10 '>{currentSlide?.title}</h1>
          <div className='w-50 flex justify-center items-center gap-3'>
            {currentSlide?.country?.map((item) => {
              return (
                <div className='flex gap-3' key={item.id}>
                  <span>{item.title}</span>
                  <Image
                    className='rounded-md'
                    src={item.image}
                    alt={item.title}
                    width={30}
                    height={20}
                  />
                </div>
              );
            })}{" "}
            <span className='w-1 h-1 bg-white rounded-xl'></span>
            IMDB: {currentSlide?.imdb}{" "}
          </div>
          <p>
            {currentSlide?.genres.map((item) => {
              return <span key={item.id}> {item.title} </span>;
            })}
          </p>
          <p>Ranting: {currentSlide?.rating}</p>

          <div>
            <Button variant='slim' className=''>
              ببینید{" "}
            </Button>
          </div>
        </div>
      </>

      <div className='w-[50%] h-full absolute bottom-0 right-0 '>
        <Carousel
          onAutoplay={() => {
            setCountTime(0);
          }}
          breakpoints={HeroResponsiveBreakpoints}
          className='h-full'
          pagination={false}
          navigation={false}
          autoplay={{
            delay: delay,
            reverseDirection: true,
          }}
          allowTouchMove={false}
          // onSwiper={(e: any) => console.log(e)}
          onActiveIndexChange={({ realIndex }: any) => {
            handleSetCurrentSlide(realIndex);
          }}
          centeredSlides={true}>
          {movies?.map((item: any, idx: number) => {
            return (
              <SwiperSlide key={idx}>
                <div className='w-full h-full rounded-lg flex justify-center items-center'>
                  <Image
                    src={`${item.image}`}
                    alt={item.title}
                    width={187}
                    className='rounded-lg m-2'
                    height={120}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroNewMovie;
