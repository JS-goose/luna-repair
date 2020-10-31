// A global layout for the app.  Useful for global styling etc.

import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <section>
      {/* <Navbar /> */}
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;
