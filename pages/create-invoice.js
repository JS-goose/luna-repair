import React from 'react';
import DashboardLayout from '../components/Layout/dashboardLayout';

const Input = (props) => <input {...props} className='border border-gray-300 p-1 rounded' />;
const Label = (props) => <label {...props} className='w-32' />

const H2 = ({ children }) => <h2 className='text-2xl leading-7 font-semibold u'>{children}</h2>;

const invoicePlaceholders = [
  {
    invoiceNumber: '001',
    firstName: 'James',
    lastName: 'Madison',
    company: 'Company Name',
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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
    address: '1234 Test Address',
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

const CreateInvoice = () => {
  return (
    <div className='mx-10'>
      <h1 className='text-4xl font-bold up'>Invoices</h1>
      <div>
        <p>Active Invoices: {invoicePlaceholders.length}</p>
        <p></p>
      </div>
      {/* Invoice page Main content */}
      <main className='grid items-stretch gap-y-8 mt-5'>
        <div className='border border-gray-400 p-4 shadow-md rounded'>
          <H2>Create An Invoice</H2>
          <form className='grid grid-cols-2 justify-start gap-y-2 mt-8'>
            <div className='grid grid-cols-2 gap-y-2'>
              <Label htmlFor='invoice-number'>
                Invoice#:&nbsp;
                <Input name='invoice-number' id='invoice-number' type='text' placeholder='#####' />{' '}
              </Label>
              <Label htmlFor='first-name'>
                First Name:&nbsp;
                <Input name='first-name' type='text' placeholder='First Name' id='first-name' />
              </Label>
              <Label htmlFor='last-name'>
                Last Name:&nbsp;
                <Input name='last-name' type='text' placeholder='First Name' id='last-name' />
              </Label>
              <Label htmlFor='address1'>
                Address 1:&nbsp;
                <Input name='address1' type='text' placeholder='Address' id='address1' />
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
            <div>
              <H2>Customer Contact Information</H2>
              <div className='invoice-creation-column-2'>
                <Label htmlFor=''>
                  Phone Number:&nbsp;
                  <Input
                    name='phone-number'
                    type='tel'
                    id=''
                    placeholder='***-***-****'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  />
                </Label>
              </div>
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
};

CreateInvoice.Layout = DashboardLayout;

export default CreateInvoice;
