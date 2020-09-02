// A bare-bones default sub-layout. Used as a fallback option if a page does not specify a sub-layout
import React from 'react';

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

export default DefaultLayout;
