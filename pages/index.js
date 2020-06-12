import fetch from 'isomorphic-unfetch';

import { Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import SidebarComponent from '../components/Sidebar';

export default function Home(props) {
  const { data } = props;
  const responseData = data.data;
  console.log(responseData);
  // const renderLink = (
  //   <iframe
  //     src='https://drive.google.com/file/d/1sNH4Pu8F-L9FcQKxAn96IatNr_rrx8Fn/preview'
  //     width='640'
  //     height='480'
  //   ></iframe>
  // );
  return (
    <>
      {/* Header */} <Navbar /> {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          {/* Main data come here */}
          <h1>Main data come here</h1>
          <ul>
            {responseData.map((file) => (
              <li key={file.id}>
                <a>file: {file.name}</a>
                {/* Sử dụng thẻ a để tạo link download - không cần 3rd library */}
                <a href={file.webContentLink} target='_blank'>
                  PDF
                </a>
                <a href={file.webContentLink} target='_blank'>
                  Word
                </a>
              </li>
            ))}
          </ul>
        </Grid.Column>
      </Grid>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await (await fetch('http://localhost:3000/api/post')).json();

  return {
    props: { data: data }, // will be passed to the page component as props
  };
}
