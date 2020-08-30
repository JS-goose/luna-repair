import React from 'react';
import Navbar from '../Navbar/navbar';

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
