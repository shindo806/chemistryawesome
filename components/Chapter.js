const Chapter = (props) => {
  const { data } = props;
  // const renderLink = (
  //   <iframe
  //     src='https://drive.google.com/file/d/1sNH4Pu8F-L9FcQKxAn96IatNr_rrx8Fn/preview'
  //     width='640'
  //     height='480'
  //   ></iframe>
  // );
  return (
    <div className='wrap-table'>
      <div className='table fixed-header'>
        <div className='table-head'>
          <table>
            <thead>
              <tr className='row head'>
                <th className='cell small-cell align-center'>Bài</th>
                <th className='cell large-cell align-left'>Ten bài</th>
                <th className='cell small-cell align-center'>Xem trươc</th>
                <th className='cell medium-cell align-center'>Download</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className='table-body js-pscroll'>
          <table>
            <tbody>
              <tr className='row body'>
                <td className='cell small-cell align-center'>1</td>
                <td className='cell large-cell align-left'>Hóa Hoc 12 -H2</td>
                <td className='cell small-cell align-center'>Xem truớc</td>
                <td className='cell medium-cell align-center'>PDF | Word</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
