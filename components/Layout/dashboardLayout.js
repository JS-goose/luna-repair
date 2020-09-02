// A layout component for the dashboard.

import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <p>This is from the dashboard layout. Main page content is below:</p>
      <hr />
      {children}
    </div>
  );
};

export default DashboardLayout;
