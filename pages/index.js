import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import SidebarComponent from '../components/Sidebar';
import MainWindow from '../components/Mainwindow';
import WelcomeWindow from '../components/WelcomeWindow';

export default function Home({ ...props }) {
  const [data, setData] = useState(props.data);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    async function fetchPageData() {
      console.log('fetch data...');
      const res = await fetch(
        `https://evening-harbor-03068.herokuapp.com/${currentPage}`
      );
      let data = await res.json();
      setData(data);
    }

    fetchPageData();
  }, [currentPage]);
  return (
    <>
      {/* Header */} <Navbar /> {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent setCurrentPage={setCurrentPage} />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          {currentPage === 'home' ? (
            <WelcomeWindow data={data} />
          ) : (
            <MainWindow />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://evening-harbor-03068.herokuapp.com/');
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
