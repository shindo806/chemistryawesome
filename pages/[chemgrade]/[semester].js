import fetch from 'isomorphic-unfetch';
import Navbar from '../../components/Navbar';
import { Grid } from 'semantic-ui-react';
import SidebarComponent from '../../components/Sidebar';
import MainWindow from '../../components/Mainwindow';

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
    paths: [
      {
        params: {
          chemgrade: 'chem10',
          semester: '1',
        },
      },
      {
        params: {
          chemgrade: 'chem10',
          semester: '2',
        },
      },
      {
        params: {
          chemgrade: 'chem11',
          semester: '1',
        },
      },
      {
        params: {
          chemgrade: 'chem11',
          semester: '2',
        },
      },
      {
        params: {
          chemgrade: 'chem12',
          semester: '1',
        },
      },
      {
        params: {
          chemgrade: 'chem12',
          semester: '2',
        },
      },
    ],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  const { chemgrade } = params;
  const { semester } = params;
  const res = await fetch(
    `https://evening-harbor-03068.herokuapp.com/${chemgrade}/${semester}`
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
