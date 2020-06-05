import { Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';
import SidebarComponent from '../components/Sidebar';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          <h1>Main data comes here</h1>
        </Grid.Column>
      </Grid>
    </>
  );
}
