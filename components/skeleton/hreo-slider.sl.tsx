const HeroSliderSkeleton = () => {
  return (
    <div
      role='status'
      className='flex items-center justify-center w-full h-[500px]  bg-gray-600 rounded-lg animate-pulse dark:bg-gray-700'>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default HeroSliderSkeleton;
