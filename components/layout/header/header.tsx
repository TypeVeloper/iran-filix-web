import Button from "@components/ui/button";const Header = () => {
  return (
    <div className='w-full h-20 flex items-center md:px-8 2xl:px-16 fixed  z-10 bg-body'>
      <div className='w-40 h-full items-center flex justify-center gap-3'>
        <Button className='bg-transparent !w-12 !px-4 !h-12 !rounded-full !border-[1px] !border-gray-700'>
          {"<"}
        </Button>
        <Button className='bg-transparent !w-12 !px-4 !h-12 !rounded-full !border-[1px] !border-gray-700'>
          {">"}
        </Button>
      </div>
      <input className='w-96  bg-transparent h-12 border-[1px] border-gray-700 rounded-lg' />
    </div>
  );
};

export default Header;
