import Head from 'next/head';
import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => (
  <Container fluid>
    <Head>
      <title> Chemistry is Awesome </title>
    </Head>
  </Container>
);

export default Layout;
