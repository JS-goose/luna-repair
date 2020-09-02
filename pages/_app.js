// https://nextjs.org/docs/advanced-features/custom-app

// Need to import App? Doesn't seem like it but check docs above for more info
// import App from 'next/app';
import '../styles/globals.css';
import MainLayout from '../components/Layout/mainLayout';
import DefaultLayout from '../components/Layout/defaultLayout';

function MyApp({ Component, pageProps }) {
  // Try to get the Layout from the component.  If it doesn't have a layout assigned, used the default layout
  const Layout = Component.Layout || DefaultLayout;
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

export default MyApp;
