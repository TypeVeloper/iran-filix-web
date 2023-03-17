import { useRef } from "react";import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
// import "swiper/modules/scrollbar/scrollbar.min.css";
import { Swiper, SwiperProps } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavigationOptions } from "swiper/types/modules/navigation.d";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

interface CarouselPropsType extends SwiperProps {
  children: any;
  className?: string;
  buttonClassName?: string;
  buttonSize?: "default" | "small";
  paginationVariant?: "default" | "circle";
  paginationPosition?: "center" | "left" | "right";
  centeredSlides?: boolean;
  breakpoints?: {} | any;
  pagination?: {} | any;
  navigation?: {} | any;
  scrollbar?: {} | any;
  autoplay?: {} | any;
  onActiveIndexChange?: Object | any;
  onSwiper?: Object | any;
  carouselClassName?: string;
}

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
  children,
  className = "",
  buttonClassName = "",
  buttonSize = "default",
  paginationVariant = "default",
  paginationPosition,
  breakpoints,
  autoplay = {
    delay: 3000,
  },
  carouselClassName,
  ...props
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const classPagination = paginationPosition
    ? `pagination-${paginationPosition}`
    : "";
  return (
    <div
      className={`carouselWrapper relative ${className} ${classPagination} ${
        paginationVariant === "circle" ? "dotsCircle" : ""
      }`}>
      <Swiper
        className={`h-full w-full ${carouselClassName}`}
        loop={true}
        autoplay={autoplay}
        breakpoints={breakpoints}
        draggable={false}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper: SwiperCore): void => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
          swiper.update();
        }}
        {...props}>
        {children}
      </Swiper>
      <div className='flex items-center w-full absolute top-2/4 z-10'>
        {/* <button
          ref={prevRef}
          className={`${buttonClassName} ${
            buttonSize === "default"
              ? "w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl"
              : "w-7 h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg"
          } text-black flex items-center justify-center rounded-full text-gray-0 bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none right-0 start-0 transform `}>
          {"<"}
        </button>
        <button
          ref={nextRef}
          className={`${buttonClassName} ${
            buttonSize === "default"
              ? "w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl"
              : "w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg"
          } text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none left-0 transform
          `}>
          {">"}
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
