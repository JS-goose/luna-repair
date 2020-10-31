import React, { useState, useReducer } from 'react';
import DashboardLayout from '../components/Layout/dashboardLayout';

const Input = (props) => <input {...props} className='border border-gray-300 p-1 rounded w-48' />;
const Label = (props) => <label {...props} className='w-40 font-bold flex flex-col' />;

const H2 = ({ children }) => <h2 className='text-2xl leading-7 font-semibold u'>{children}</h2>;

function CreateInvoice() {
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
  const formReducer = (state, event) => {
    let indexPlusOne = invoicePlaceholders.length++;
    return {
      ...state,
      10: { [event.name]: event.value },
    };
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const [formData, setFormData] = useReducer(formReducer, invoicePlaceholders);
  const [submitting, setSubmitting] = useState(false);
  let paidInvoices = 0;
  let invoicesWaitingForPayment = 0;
  let activeInvoices = 0;
  let billedInvoices = 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(event.target.value);
    setTimeout(() => {
      setSubmitting(false);
    }, 1200);
  };

  return (
    <div className='mx-10'>
      <h1 className='text-4xl font-bold up'>Invoices</h1>
      {/* Invoice page Main content */}
      {submitting && <p>Submitting form data...</p>}
      <main className='grid items-stretch gap-y-8 mt-5'>
        <div className='border border-gray-400 p-4 shadow-md rounded'>
          <H2>Create An Invoice</H2>
          <form className='grid grid-cols-2 gap-y-2 mt-8' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-y-2 justify-items-center'>
              <Label htmlFor='invoiceNumber'>
                Invoice Number:&nbsp;
                <Input
                  onChange={handleChange}
                  name='invoiceNumber'
                  id='invoiceNumber'
                  type='text'
                  placeholder='#####'
                />{' '}
              </Label>
              <Label htmlFor='firstName'>
                First Name:&nbsp;
                <Input onChange={handleChange} name='firstName' type='text' placeholder='First Name' id='firstName' />
              </Label>
              <Label htmlFor='address1'>
                Address 1:&nbsp;
                <Input onChange={handleChange} name='address1' type='text' placeholder='Address' id='address1' />
              </Label>
              <Label htmlFor='lastName'>
                Last Name:&nbsp;
                <Input onChange={handleChange} name='lastName' type='text' placeholder='Last Name' id='lastName' />
              </Label>
              <Label htmlFor='address2'>
                Address 2:&nbsp;
                <Input name='address2' type='text' placeholder='Address' id='address2' />
              </Label>
              <Label htmlFor='city'>
                City:&nbsp;
                <Input name='city' type='text' placeholder='City' id='city' />
              </Label>
              <Label htmlFor='state'>
                State:&nbsp;
                <Input name='state' type='text' placeholder='State' id='state' />
              </Label>
              <Label htmlFor='zipCode'>
                Zip Code:&nbsp;
                <Input name='zipCode' type='number' min='0' max='10000' placeholder='Zip Code' id='zipCode' />
              </Label>
            </div>
            <div className='invoice-creation-column-2'>
              <Label htmlFor='phoneNumber'>
                Phone Number:&nbsp;
                <Input
                  name='phoneNumber'
                  type='tel'
                  id='phoneNumber'
                  placeholder='***-***-****'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                />
              </Label>
              <Label htmlFor='email1'>
                Email 1:&nbsp;
                <Input name='email1' type='email' id='email1' placeholder='john@email.com' />
              </Label>
              <Label htmlFor='email2'>
                Email 2:&nbsp;
                <Input name='email2' type='email' id='email2' placeholder='dave@email.com' />
              </Label>
              <Label htmlFor='amount'>
                Invoice Price: &nbsp;
                <Input name='amount' type='number' min='0' max='50000' id='amount' placeholder='$USD' />
              </Label>
            </div>
            <div>
              <button type='submit' className='border-2 border-black rounded-md p-1 uppercase tracking-wider font-bold'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='border border-gray-300 p-5 shadow-md rounded'>
          <H2>Invoice Summary</H2>
          <div>
            {invoicePlaceholders.forEach((invoice) => {
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
            <p>Total Invoices: {invoicePlaceholders.length}</p>
          </div>
          <div className='mt-8'>
            {invoicePlaceholders.map((invoice, index) => (
              <div key={index} data-key={index} className='mt-2'>
                <div className='flex justify-between'>
                  <p className='mb-2'>
                    Invoice Number:
                    <span className='font-bold'>{` ${invoice.invoiceNumber}`}</span>
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
