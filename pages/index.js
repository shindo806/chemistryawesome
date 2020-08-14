import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import { Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import SidebarComponent from '../components/Sidebar';
import MainWindow from '../components/Mainwindow';

export default function Home(props) {
  // const { data } = props.data;
  console.log(props);
  return (
    <>
      <Head>
        <script defer src='https://apis.google.com/js/api.js'></script>
      </Head>
      {/* Header */} <Navbar /> {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          {/* Main data come here */}
          <MainWindow />
        </Grid.Column>
      </Grid>
    </>
  );
}

// Home.getInitialProps = async () => {
//   const response = await fetch('http://localhost:3000/api/post');
//   const data = await response.json();

//   return {
//     props: { data: data }, // will be passed to the page component as props
//   };
// };

// export async function getStaticProps(context) {
//   const response = await fetch('/api/post');
//   // const data = await response.json();

//   return {
//     props: { data: 'shindo' }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/post');
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
