import Link from "next/link";import { Url, UrlObject } from "url";

interface SidebarSectionProps {
  children?: any;
  title?: String;
}

interface ListProps {
  children?: any;
}

interface ItemProps {
  href: UrlObject | Url;
  children?: any;
}

type ListCmp = React.ComponentType<ListProps>;
type ListItemCmp = React.ComponentType<ItemProps>;
type SidebarSectionCmp = React.ComponentType<SidebarSectionProps> & {
  List?: ListCmp;
  Item?: ListItemCmp;
};

const SidebarSection: SidebarSectionCmp = ({ children, title }) => {
  return (
    <div className='h-fit min-h-[220px] w-full '>
      {title && <h4 className=' text-sm text-gray-400'>{title}</h4>}
      {children}
    </div>
  );
};

// list component
const List: ListCmp = ({ children }): JSX.Element => <ul>{children}</ul>;

const Item: ListItemCmp = ({ children, href }): JSX.Element => {
  return (
    <Link href={href}>
      <li>{children}</li>
    </Link>
  );
};

SidebarSection.List = List;
SidebarSection.Item = Item;
export default SidebarSection;
