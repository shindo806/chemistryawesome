import fetch from 'isomorphic-unfetch';
import Navbar from '../components/Navbar';
import { Grid } from 'semantic-ui-react';
import SidebarComponent from '../components/Sidebar';
import MainWindow from '../components/Mainwindow';

export default function Chemgrade({ data, params }) {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Main */}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent params={params} />
        </Grid.Column>
        <Grid.Column width={13} className='main-container'>
          <MainWindow data={data} />
        </Grid.Column>
      </Grid>
    </>
  );
}

// Provide dynamic paths then use getStaticProps to fetch data
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          chemgrade: 'chem10',
        },
      },
      {
        params: {
          chemgrade: 'chem11',
        },
      },
      {
        params: {
          chemgrade: 'chem12',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const params = context.params;
  const chemgrade = context.params.chemgrade ? context.params.chemgrade : null;
  if (chemgrade) {
    const res = await fetch(
      `https://evening-harbor-03068.herokuapp.com/${chemgrade}`
    );
    const data = await res.json();
    return {
      props: {
        data: data.data,
        params,
      },
    };
  }
}
