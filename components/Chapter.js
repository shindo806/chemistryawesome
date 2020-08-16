import { useState } from 'react';

import CustomModal from './Modal';

const Chapter = (props) => {
  const files = props.data;
  console.log(files);
  const [previewLink, setPreviewLink] = useState('');
  const handlePreview = (link) => {
    setPreviewLink(link);
  };
  return (
    <div className='wrap-table'>
      <div className='table fixed-header'>
        <div className='table-head'>
          <table>
            <thead>
              <tr className='row head'>
                <th className='cell small-cell align-center'>Bài</th>
                <th className='cell large-cell align-left'>Tên bài</th>
                <th className='cell small-cell align-center'>Xem trước</th>
                <th className='cell medium-cell align-center'>Download</th>
              </tr>
            </thead>
          </table>
        </div>
        <CustomModal link={previewLink} />
        <div className='table-body js-pscroll'>
          <table>
            <tbody>
              {files.map((file, index) => (
                <tr
                  className={`row body ${
                    index % 2 === 0 ? 'even-row' : 'odd-row'
                  }`}
                  key={file.id}
                >
                  <td className='cell small-cell align-center'>{index + 1}</td>
                  <td className='cell large-cell align-left'>
                    {file.name.split(/\.pdf/)[0]}
                  </td>
                  <td className='cell small-cell align-center'>
                    <a
                      onClick={() => handlePreview(file.webViewLink)}
                      className='preview'
                    >
                      Xem truớc
                    </a>
                  </td>
                  <td className='cell medium-cell align-center'>
                    <a
                      href={file.webContentLink}
                      title='PDF'
                      className='download-button'
                    >
                      {/* <span>PDF</span> */}
                      <span className='filetype-logo'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='file-pdf'
                          className='svg-inline--fa fa-file-pdf fa-w-12'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'
                        >
                          <path d='M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z'></path>
                        </svg>
                      </span>
                    </a>{' '}
                    <a href='/' title='Word' className='download-button'>
                      {/* <span>Word</span> */}
                      <span className='filetype-logo'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='file-word'
                          className='svg-inline--fa fa-file-word fa-w-12'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'
                        >
                          <path d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'></path>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
