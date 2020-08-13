import fetch from 'isomorphic-unfetch';

import { Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import SidebarComponent from '../components/Sidebar';
import MainWindow from '../components/Mainwindow';

export default function Home(props) {
  const { data } = props;
  const responseData = data.data;

  return (
    <>
      {/* Header */} <Navbar /> {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          {/* Main data come here */}
          <MainWindow data={responseData} />
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
