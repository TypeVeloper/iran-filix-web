import Footer from "@components/layout/footer/footer";
import Header from "@components/layout/header/header";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Sidebar from "@components/layout/sidebar/sidebar";
import React from "react";
interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex  min-h-screen bg-body  '>
      <Sidebar />
      <div className='w-10/12 max-w-[1600px] flex  flex-col mr-80 pl-6 relative  h-full'>
        <Header />
        <main
          className='relative  mt-20 flex-grow '
          style={{
            minHeight: "-webkit-fill-available",
            WebkitOverflowScrolling: "touch",
          }}>
          {children}
        </main>
        <Footer />
      </div>
      <MobileNavigation />
    </div>
  );
};

export default Layout;
