import React from 'react';
import { providers, signIn } from 'next-auth/client';
import Image from '../../components/Image/image';

export default function SignIn({ providers }) {
  return (
    <section className="signin-container text-white flex flex-col items-center justify-center">
      <article className="bg-medDarkBlue p-6 text-xl">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col justify-center p-4 border border-black">
            <button
              onClick={() =>
                signIn(provider.id, { callbackUrl: 'http://localhost:3000/create-invoice' })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </article>
    </section>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
