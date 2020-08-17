import { useState } from 'react';
import Semester from './Semester';
import Chapter from './Chapter';
import Powerpoint from './Powerpoint';

const MainWindow = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <Chapter data={props.data} />
            ) : activeIndex === 1 ? (
              <Semester data={props.data} />
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
