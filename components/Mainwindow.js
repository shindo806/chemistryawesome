// import { Table } from 'semantic-ui-react';
import { useState } from 'react';
import Semaster from './Semaster';
import Chapter from './Chapter';
import Powerpoint from './Powerpoint';

const MainWindow = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const { data } = props;
  // const renderLink = (
  //   <iframe
  //     src='https://drive.google.com/file/d/1sNH4Pu8F-L9FcQKxAn96IatNr_rrx8Fn/preview'
  //     width='640'
  //     height='480'
  //   ></iframe>
  // );
  const handleActiveTab = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <>
      <div className='main-window-wrapper'>
        <div className='tabbed round'>
          <ul>
            <li
              className={activeIndex === 0 ? 'active' : null}
              onClick={() => handleActiveTab(0)}
            >
              Chương
            </li>
            <li
              className={activeIndex === 1 ? 'active' : null}
              onClick={() => handleActiveTab(1)}
            >
              Học kì
            </li>
            <li
              className={activeIndex === 2 ? 'active' : null}
              onClick={() => handleActiveTab(2)}
            >
              Bài giảng
            </li>
          </ul>
        </div>
        <div className='data-panel'>
          <div className='data-panel-header'>
            {activeIndex === 0 ? (
              <Chapter />
            ) : activeIndex === 1 ? (
              <Semaster />
            ) : (
              <Powerpoint />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainWindow;
