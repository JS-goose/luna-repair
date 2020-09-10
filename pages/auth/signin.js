import React from 'react';
import { providers, signIn } from 'next-auth/client';

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, { callbackUrl: 'http://localhost:3000/create-invoice' })
            }
          >
            Sign in with {provider.name} and bacon!
          </button>
        </div>
      ))}
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
