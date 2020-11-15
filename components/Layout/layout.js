import React from 'react';

const Layout = ({ children }) => {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
