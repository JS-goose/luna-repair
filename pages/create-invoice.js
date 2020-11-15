import React, { useState, useReducer } from 'react';
import DashboardLayout from '../components/Layout/dashboardLayout';
import useInputs from '../hooks/useInputs';

const Input = (props) => (
  <input {...props} className="border border-gray-300 p-1 rounded w-48" />
);
const Label = (props) => (
  <label {...props} className="w-40 font-bold flex flex-col" />
);

const H2 = ({ children }) => (
  <h2 className="text-2xl leading-7 font-semibold u">{children}</h2>
);

function CreateInvoice() {
  // * Temporary values for our database of invoices
  const invoicePlaceholders = [
    {
      invoiceNumber: '001',
      firstName: 'James',
      lastName: 'Madison',
      company: 'Company Name',
      address1: '1234 Test Address',
      address2: '',
      city: 'Central City',
      state: 'TX',
      zipCode: '55555',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$500.35',
      status: 'Awaiting Payment',
      created: '08/18/2020',
      lastUpdated: '10/20/2020',
    },
    {
      invoiceNumber: '002',
      firstName: 'Oprah',
      lastName: 'Winnefrey',
      company: 'Name of Company',
      address1: '1234 Test Address',
      address2: '',
      city: 'Beaverton',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$300.28',
      status: 'Active',
      created: '09/01/2020',
      lastUpdated: '10/15/2020',
    },
    {
      invoiceNumber: '003',
      firstName: 'John',
      lastName: 'Smith',
      company: 'Company Name Here',
      address1: '1234 Test Address',
      address2: '',
      city: 'Gotham City',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$400.71',
      status: 'Billed',
      created: '6/15/2020',
      lastUpdated: '10/25/2020',
    },
    {
      invoiceNumber: '004',
      firstName: 'Jane',
      lastName: 'Smith',
      company: 'Smith & Co.',
      address1: '1234 Test Address',
      address2: '',
      city: 'Whateverville',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$300.85',
      status: 'Billed',
      created: '06/27/2020',
      lastUpdated: '10/03/2020',
    },
    {
      invoiceNumber: '005',
      firstName: 'Calvin',
      lastName: 'Klein',
      company: 'Smell Goodz, Inc.',
      address1: '1234 Test Address',
      address2: '',
      city: 'Hometown',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$1,000.94',
      status: 'Awaiting Payment',
      created: '8/19/2020',
      lastUpdated: '10/18/2020',
    },
    {
      invoiceNumber: '006',
      firstName: 'Margaret',
      lastName: 'Thatcher',
      company: 'UK Government, Inc.',
      address1: '1234 Test Address',
      address2: '',
      city: 'City Name',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$1,200.07',
      status: 'Awaiting Payment',
      created: '05/19/2020',
      lastUpdated: '9/19/2020',
    },
    {
      invoiceNumber: '007',
      firstName: 'Janice',
      lastName: 'Joplin',
      company: 'Whatever Company',
      address1: '1234 Test Address',
      address2: '',
      city: 'Test City',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$225.50',
      status: 'Paid & Closed',
      created: '3/19/2020',
      lastUpdated: '09/18/2020',
    },
    {
      invoiceNumber: '008',
      firstName: 'Joan',
      lastName: 'DeArk',
      company: 'Put Name here',
      address1: '1234 Test Address',
      address2: '',
      city: 'Cityville',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$1,650.63',
      status: 'Awaiting Payment',
      created: '8/19/2020',
      lastUpdated: '05/13/2020',
    },
    {
      invoiceNumber: '009',
      firstName: 'Jerry',
      lastName: 'Garcia',
      company: 'Standard Company Name',
      address1: '1234 Test Address',
      address2: '',
      city: 'Jamestown',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$961.48',
      status: 'Billed',
      created: '1/19/2020',
      lastUpdated: '10/18/2020',
    },
    {
      invoiceNumber: '010',
      firstName: 'Dolly',
      lastName: 'Parton',
      company: 'Generic Company Name',
      address1: '1234 Test Address',
      address2: '',
      city: 'Put City Name Here',
      state: 'TX',
      zipCode: '98712',
      phoneNumber: '555-555-5555',
      email1: 'name@domain.com',
      email2: 'email@domain.com',
      amount: '$100.61',
      status: 'Paid & Closed',
      created: '5/19/2020',
      lastUpdated: '11/18/2020',
    },
  ];

  const initialInvoiceFormValues = {
    invoiceNumber: '',
    firstName: '',
    lastName: '',
    company: '',
    address1: '',
    address2: '',
    city: ' ',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email1: '',
    email2: '',
    amount: '',
    status: '',
    created: '',
    lastUpdated: '',
  };

  // *----- Initialize the cusom hook "useInputs" with the initial state for the "create invoice form" ----//
  // * Custom hook includes the "handleChange" logic, as well as the initializing and updating the state for the Invoice submission form
  // * Later, we can update useInputs hook to include logic to update the database with the new entry
  const { values, setValues, handleChange } = useInputs(
    initialInvoiceFormValues
  );

  // * Instead of useReducer, I (Stu) assigned the initial invoices to state with useState - seems simpler but admittedly I don't have a lot of knowledge of useReducer

  const [allInvoices, setAllInvoices] = useState(invoicePlaceholders);
  const [submitting, setSubmitting] = useState(false);
  let paidInvoices = 0;
  let invoicesWaitingForPayment = 0;
  let activeInvoices = 0;
  let billedInvoices = 0;

  // * Handlesubmit adds the form data (stored in the "values" variable), to the master invoice list array
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const addNewData = () => {
      const body = { ...values };
      const newInvoiceList = allInvoices;
      newInvoiceList.push(body);
      setAllInvoices(newInvoiceList);
      setSubmitting(false);
    };
    // * This is to emulate the server response time
    setTimeout(addNewData, 1200);

    console.log('Submitted!');
    // * Clears the form, and reset the form data's state to the initial values
    setValues(initialInvoiceFormValues);
  };

  return (
    <div className="mx-10">
      <h1 className="text-4xl font-bold up">Invoices</h1>
      {/* Invoice page Main content */}
      {submitting && <p>Submitting form data...</p>}
      <main className="grid items-stretch gap-y-8 mt-5">
        <div className="border border-gray-400 p-4 shadow-md rounded">
          <H2>Create An Invoice</H2>
          <form
            className="grid grid-cols-2 gap-y-2 mt-8"
            onSubmit={handleSubmit}
          >
            {/* Order needs to be looked at for accessibility */}
            <div className="grid grid-cols-2 gap-y-2 justify-items-center">
              <Label htmlFor="invoiceNumber">
                Invoice Number:&nbsp;
                <Input
                  onChange={handleChange}
                  name="invoiceNumber"
                  id="invoiceNumber"
                  type="text"
                  value={values.invoiceNumber}
                  placeholder="####"
                />{' '}
              </Label>
              <Label htmlFor="firstName">
                First Name:&nbsp;
                <Input
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={values.firstName}
                  id="firstName"
                />
              </Label>
              <Label htmlFor="address1">
                Address 1:&nbsp;
                <Input
                  onChange={handleChange}
                  name="address1"
                  type="text"
                  placeholder="Address"
                  id="address1"
                  value={values.address1}
                />
              </Label>
              <Label htmlFor="lastName">
                Last Name:&nbsp;
                <Input
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  value={values.lastName}
                />
              </Label>
              <Label htmlFor="address2">
                Address 2:&nbsp;
                <Input
                  onChange={handleChange}
                  name="address2"
                  type="text"
                  placeholder="Address"
                  id="address2"
                  value={values.address2}
                />
              </Label>
              <Label htmlFor="city">
                City:&nbsp;
                <Input
                  onChange={handleChange}
                  name="city"
                  type="text"
                  placeholder="City"
                  id="city"
                  value={values.city}
                />
              </Label>
              <Label htmlFor="state">
                State:&nbsp;
                <Input
                  onChange={handleChange}
                  name="state"
                  type="text"
                  placeholder="State"
                  id="state"
                  value={values.state}
                />
              </Label>
              <Label htmlFor="zipCode">
                Zip Code:&nbsp;
                <Input
                  onChange={handleChange}
                  name="zipCode"
                  type="number"
                  min="0"
                  max="10000"
                  placeholder="Zip Code"
                  id="zipCode"
                  value={values.zipCode}
                />
              </Label>
            </div>
            <div className="invoice-creation-column-2">
              <Label htmlFor="phoneNumber">
                Phone Number:&nbsp;
                <Input
                  onChange={handleChange}
                  name="phoneNumber"
                  type="tel"
                  id="phoneNumber"
                  placeholder="***-***-****"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={values.phoneNumber}
                />
              </Label>
              <Label htmlFor="email1">
                Email 1:&nbsp;
                <Input
                  onChange={handleChange}
                  name="email1"
                  type="email"
                  id="email1"
                  placeholder="john@email.com"
                  value={values.email1}
                />
              </Label>
              <Label htmlFor="email2">
                Email 2:&nbsp;
                <Input
                  onChange={handleChange}
                  name="email2"
                  type="email"
                  id="email2"
                  placeholder="dave@email.com"
                  value={values.email2}
                />
              </Label>
              <Label htmlFor="amount">
                Invoice Price: &nbsp;
                <Input
                  onChange={handleChange}
                  name="amount"
                  type="number"
                  min="0"
                  max="50000"
                  id="amount"
                  placeholder="$USD"
                  value={values.amount}
                />
              </Label>
            </div>
            <div>
              <button
                type="submit"
                className="border-2 border-black rounded-md p-1 uppercase tracking-wider font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="border border-gray-300 p-5 shadow-md rounded mb-10">
          <H2>Invoice Summary</H2>
          <div>
            {allInvoices.forEach((invoice) => {
              return invoice.status === 'Paid & Closed'
                ? paidInvoices++
                : invoice.status === 'Billed'
                ? billedInvoices++
                : invoice.status === 'Awaiting Payment'
                ? invoicesWaitingForPayment++
                : invoice.status === 'Active'
                ? activeInvoices++
                : '';
            })}
            <p>Active Invoices: {activeInvoices}</p>
            <p>Billed Invoices: {billedInvoices}</p>
            <p>Waiting on Payment: {invoicesWaitingForPayment}</p>
            <p>Paid & Closed Invoices:{paidInvoices}</p>
            <p>Total Invoices: {allInvoices.length}</p>
          </div>
          <div className="mt-8">
            {allInvoices.map((invoice, index) => (
              <div key={index} data-key={index} className="mt-2">
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

CreateInvoice.Layout = DashboardLayout;

export default CreateInvoice;
