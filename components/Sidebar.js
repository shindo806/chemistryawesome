import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

import menuItems from '../menuItems.json';
// Load SVG logo
import { EclenLogo } from '../utils/loadSVG';
// utils stuff goes here
function MenuLink(props) {
  const { data } = menuItems;
  const [activeUrl, setActiveUrl] = useState(-1);
  const [subMenuActive, setSubMenuActive] = useState(-1);

  useEffect(() => {
    setActiveUrl(props.params.chemgrade);
    const subMenuLink = `${props.params.chemgrade}/${props.params.semester}`;
    setSubMenuActive(subMenuLink);
  }, []);

  const handleClick = (e, url) => {
    // e.preventDefault();
    // const newUrl = activeUrl === url ? -1 : url;
    // setActiveUrl(newUrl);
    console.log(url);
  };

  const hadleSubLinkClick = (e, url) => {
    // e.preventDefault();
    console.log(url);
  };

  const renderArray = data.map((item) => (
    <ul className='mainmenu' key={item.tag}>
      <h3 className='menu-title'> {item.category} </h3>
      {item.links.map((link) => (
        <li className='menu-link' key={link.url}>
          <Link href={`/${link.url}`}>
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
          {/* Submenu */}
          <ul
            className={
              activeUrl === link.url ? 'submenu show-submenu' : 'submenu'
            }
          >
            {link.childrens
              ? link.childrens.map((children) => (
                  <Link href={`/${children.url}`} key={children.url}>
                    <a
                      onClick={(e) => hadleSubLinkClick(e, children.url)}
                      className={
                        subMenuActive === children.url
                          ? 'submenu-highlight'
                          : null
                      }
                    >
                      {children.name}
                    </a>
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
