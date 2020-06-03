// import App from 'next/app'
import 'semantic-ui-css/semantic.min.css';
// import Layout from '../components/Layout';
import '../css/style.css';
import '../css/header.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
