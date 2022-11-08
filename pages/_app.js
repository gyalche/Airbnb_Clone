import '../styles/globals.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progess = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progess.start);
Router.events.on('routeChangeComplete', progess.finish);
Router.events.on('routeChangeError', progess.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
