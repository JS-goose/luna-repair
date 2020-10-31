import React from 'react';
import { useSession } from 'next-auth/client';
import DashboardLayout from '../components/Layout/dashboardLayout';

const Input = (props) => <input {...props} className="border border-gray-300 p-1" />;

const H2 = ({ children }) => <h2 className="text-2xl leading-7 font-semibold u">{children}</h2>;

const invoicePlaceholders = [
  { invoiceNumber: '001', amount: '$500.00' },
  { invoiceNumber: '002', amount: '$300.00' },
  { invoiceNumber: '003', amount: '$400.00' },
  { invoiceNumber: '004', amount: '$300.00' },
  { invoiceNumber: '005', amount: '$1000.00' },
];

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
    return (
      <div className="mx-10">
        <h1 className="text-4xl font-bold up">Invoices</h1>
        {/* Invoice page Main content */}
        <main className="grid items-stretch gap-y-8 mt-5">
          <div className="border border-gray-400 p-4 shadow-md">
            <H2>Create An Invoice</H2>
            <form className="grid justify-start gap-y-2 mt-8">
              <label>
                Invoice Number:&nbsp;
                <Input type="text" placeholder="#####" id="invoiceNumber" />
              </label>
              <div className="flex gap-x-5">
                <label>
                  First Name:&nbsp;
                  <Input type="text" placeholder="First Name" id="name" />
                </label>
                <label>
                  Last Name:&nbsp;
                  <Input type="text" placeholder="First Name" id="name" />
                </label>
              </div>
              <label>
                Address 1:&nbsp;
                <Input type="text" placeholder="Address" id="address1" />
              </label>
              <label>
                Address 2:&nbsp;
                <Input type="text" placeholder="Address" id="address1" />
              </label>
              <button
                type="submit"
                className="border-2 border-black rounded-md p-1 uppercase tracking-wider font-bold"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="border border-gray-300 p-5 shadow-md">
            <H2>Invoice Summary</H2>
            <div className="mt-8">
              {invoicePlaceholders.map((invoice) => (
                <div className="mt-2">
                  <div className="flex justify-between">
                    <p className="mb-2">
                      Invoice Number:
                      <span className="font-bold">{` ${invoice.invoiceNumber}`}</span>
                    </p>
                    <p>{invoice.amount}</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
};

CreateInvoice.Layout = DashboardLayout;

export default CreateInvoice;
