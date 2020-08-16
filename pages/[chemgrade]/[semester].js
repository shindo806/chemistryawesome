import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { Grid } from 'semantic-ui-react';
import SidebarComponent from '../../components/Sidebar';
import MainWindow from '../../components/Mainwindow';

const Semester = ({ params }) => {
  return (
    <>
      {' '}
      {/* Header */} <Navbar /> {/* Main */}{' '}
      <Grid>
        <Grid.Column width={3} className='sidebar'>
          <SidebarComponent params={{ ...params }} />
        </Grid.Column>{' '}
        <Grid.Column width={13} className='main-container'>
          {/* Main data come here */} {/* <MainWindow /> */}
        </Grid.Column>{' '}
      </Grid>{' '}
    </>
  );
};
export async function getServerSideProps(context) {
  const params = context.params;

  return {
    props: {
      params,
    },
  };
}

export default Semester;
