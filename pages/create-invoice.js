import React from 'react';
import { useSession } from 'next-auth/client';
import DashboardLayout from '../components/Layout/dashboardLayout';

const CreateInvoice = () => {
  const [session] = useSession();
  if (!session) {
    return (
      <div>
        <h1 className="text-2xl text-liteRed">You are NOT logged in!</h1>{' '}
        <a href="/api/auth/signin" rel="noopener noreferrer">
          <button
            type="button"
            className="bg-lightBlue text-white  hover:bg-darkBlue hover:shadow-md active:bg-lime active:text-charcoal focus:outline-none focus:shadow-outline font-bold p-2 rounded shadow"
          >
            Click Here to Sign In
          </button>
        </a>
      </div>
    );
  }
  if (session) {
    return <div>This is the invoice creation page!</div>;
  }
};

CreateInvoice.Layout = DashboardLayout;

export default CreateInvoice;
