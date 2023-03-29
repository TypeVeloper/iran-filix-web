import Link from "next/link";import SidebarSection from "./sidebar-section";
const Sidebar = () => {
  return (
    <div className='w-80 flex flex-col justify-start gap-10 items-start p-3 fixed border-l-[1px] border-gray-700 h-full '>
      <div className='text-2xl w-full flex justify-center items-center flex-row-reverse'>
        Iran <span className='text-heading'>Filix</span>
      </div>
      <SidebarSection title={"منو"}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/series"}>Series</Link>
          </li>

          <li>salam</li>
          <li>salam</li>
        </ul>
      </SidebarSection>
      <SidebarSection title={"دسته بندی ها"}>logo</SidebarSection>
    </div>
  );
};

const SidebarListItem = () => {};

export default Sidebar;
