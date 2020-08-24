import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import menuItems from '../../menuItems.json';
import MainMenu from './MainMenu';
// utils stuff goes here
function MenuLink(props) {
  const query = useRouter().query;
  const { data } = menuItems;

  const [activeUrl, setActiveUrl] = useState(-1);
  const [subMenuActive, setSubMenuActive] = useState(-1);

  useEffect(() => {
    if (props.params) {
      setActiveUrl(props.params.chemgrade);
      if (props.params.semester) {
        const subMenuLink = `${props.params.chemgrade}/${props.params.semester}`;
        setSubMenuActive(subMenuLink);
      }
    }
  }, []);

  return (
    <>
      {data.map((item) => (
        <MainMenu
          key={item.category}
          item={item}
          activeUrl={activeUrl}
          queryObject={query}
          subMenuActive={subMenuActive}
        />
      ))}
    </>
  );
}

const SidebarComponent = (props) => {
  return (
    <>
      {/* User status is coming soon*/} {/* Sidebar links */}
      <div className='sidebar'>
        <nav className='navigation'>
          <MenuLink params={props.params} />
        </nav>
      </div>
    </>
  );
};

export default SidebarComponent;
