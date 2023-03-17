import React from "react";interface Props {
  title?: String;
  children?: any;
}
const SidebarSection: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='h-fit min-h-[220px] w-full '>
      {title && <h4 className=' text-sm text-gray-400'>{title}</h4>}
      {children}
    </div>
  );
};

export default SidebarSection;
