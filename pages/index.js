import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import SidebarComponent from '../components/Sidebar';
import MainWindow from '../components/Mainwindow';
import WelcomeWindow from '../components/WelcomeWindow';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {/* Header */} <Navbar /> {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent setCurrentPage={setCurrentPage} />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          <WelcomeWindow />
        </Grid.Column>
      </Grid>
    </>
  );
}
