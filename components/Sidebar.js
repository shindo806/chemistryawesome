import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

import menuItems from '../menuItems.json';
// Load SVG logo
import { EclenLogo } from '../utils/loadSVG';
import { useState } from 'react';

// utils stuff goes here
function createMenuLink() {
  const { data } = menuItems;
  const [activeUrl, setActiveUrl] = useState(-1);

  const handleClick = (e, url) => {
    e.preventDefault();
    const newUrl = activeUrl === url ? -1 : url;
    setActiveUrl(newUrl);
  };

  const renderArray = data.map((item) => (
    <ul className='mainmenu' key={item.tag}>
      <h3 className='menu-title'> {item.category} </h3>
      {item.links.map((link) => (
        <li className='menu-link' key={link.url}>
          <Link href={link.url}>
            <a
              onClick={(e) => handleClick(e, link.url)}
              className={activeUrl === link.url ? 'highlight-menu' : null}
            >
              <EclenLogo className={'link-icon'} />
              <span>{link.name}</span>
              {activeUrl !== link.url ? (
                <Icon name='chevron down' className='dropdown-icon' />
              ) : null}
            </a>
          </Link>
          <ul
            className={
              activeUrl === link.url ? 'submenu show-submenu' : 'submenu'
            }
          >
            {link.childrens
              ? link.childrens.map((children) => (
                  <Link href={children.url} key={children.url}>
                    <a> {children.name} </a>
                  </Link>
                ))
              : null}
          </ul>
        </li>
      ))}
    </ul>
  ));
  return renderArray;
}

const SidebarComponent = () => {
  const renderJSX = createMenuLink();

  return (
    <>
      {/* User status is coming soon*/} {/* Sidebar links */}
      <div className='sidebar'>
        <nav className='navigation'>{renderJSX}</nav>
      </div>
    </>
  );
};

export default SidebarComponent;
