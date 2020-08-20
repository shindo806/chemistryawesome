import fetch from 'isomorphic-unfetch';

import { Grid } from 'semantic-ui-react';
import Navbar from '../../../components/Navbar';
import SidebarComponent from '../../../components/Sidebar/Sidebar';
import MainWindow from '../../../components/Mainwindow';

// Static path JSON file
import staticPathJSON from '../../../static_paths.json';

const Semester = ({ params, data }) => {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent params={{ ...params }} />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          {/* Main data come here */}
          <MainWindow data={data} />
        </Grid.Column>
      </Grid>
    </>
  );
};

// Provide dynamic paths then use getStaticProps to fetch data
export async function getStaticPaths() {
  return {
    paths: staticPathJSON,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  const { chemgrade } = params;
  const { semester } = params;
  const res = await fetch(
    `https://evening-harbor-03068.herokuapp.com/semester/${chemgrade}/${semester}`
  );
  const data = await res.json();
  return {
    props: {
      params,
      data: data.data,
    },
  };
}

export default Semester;
