// https://nextjs.org/docs/advanced-features/custom-app

// Need to import App? Doesn't seem like it but check docs above for more info
// import App from 'next/app';
import '../styles/globals.css';
import MainLayout from '../components/Layout/mainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
