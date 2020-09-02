// https://nextjs.org/docs/advanced-features/custom-app

import App from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
