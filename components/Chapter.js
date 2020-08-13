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
      <div class='table fixed-header'>
        <div class='table-head'>
          <table>
            <thead>
              <tr class='row head'>
                <th class='cell small-cell align-center'>Bài</th>
                <th class='cell large-cell align-left'>Teen bài</th>
                <th class='cell small-cell align-center'>Xem trươc</th>
                <th class='cell medium-cell align-center'>Download</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class='table-body js-pscroll'>
          <table>
            <tbody>
              <tr class='row body'>
                <td class='cell small-cell align-center'>1</td>
                <td class='cell large-cell align-left'>Hóa Hoc 12 -H2</td>
                <td class='cell small-cell align-center'>Xem truớc</td>
                <td class='cell medium-cell align-center'>PDF | Word</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
