import React from 'react';
import Navbar from '../Navbar/navbar';

const MainLayout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;
