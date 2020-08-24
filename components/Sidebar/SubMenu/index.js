import React from 'react';
import Link from 'next/link';

export default function SubMenu(props) {
  const { link, activeUrl, queryObject } = props;
  const subMenuActive = `${queryObject.chemgrade}/${queryObject.semester}`;
  return (
    <ul
      className={activeUrl === link.url ? 'submenu' : 'submenu'}
      className='submenu'
    >
      {link.childrens
        ? link.childrens.map((children) => (
            <Link
              href={`/semester/[link.url]/[children.url]`}
              as={`/semester/${children.url}`}
              key={children.url}
            >
              <li>
                <a
                  // onClick={(e) => hadleSubLinkClick(e, children.url)}
                  className={
                    subMenuActive === children.url ? 'submenu-highlight' : null
                  }
                >
                  {children.name}
                </a>
              </li>
            </Link>
          ))
        : null}
    </ul>
  );
}
