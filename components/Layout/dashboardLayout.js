// A layout component for the dashboard.

import React from 'react';

const SidebarItem = ({ children }) => (
  <div className="my-5 ml-5 text-xl">{children}</div>
);

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-flow-col grid-cols-dashboard h-screen">
      <div className="flex flex-col justify-left bg-blue-800 max-h-full text-white p-3">
        <div className="text-3xl mb-5 ml-3">LOGO HERE</div>
        <SidebarItem>Dashboard</SidebarItem>
        <SidebarItem>Customers</SidebarItem>
        <SidebarItem>Invoices</SidebarItem>
        <SidebarItem>Estimates</SidebarItem>
        <SidebarItem>Tickets</SidebarItem>
        <SidebarItem>Reports</SidebarItem>
        <SidebarItem>Quickviews</SidebarItem>
        <SidebarItem>Checklist</SidebarItem>
        <SidebarItem>Customer Map</SidebarItem>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
