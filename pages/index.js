import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession, options } from 'next-auth/client';
import styles from '../styles/Home.module.css';
import Image from '../components/Image/image';
import Layout from '../components/Layout/layout';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <Layout>
      <section className="landing-page-container flex flex-col items-center justify-center sm:space-y-10 md:space-y-40">
        <article className="bg-wht20 sm:w-full md:w-auto p-4 text-center border-solid border-2 border-medDarkBlue rounded">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            Welcome to Luna Repair System!
          </h1>
        </article>
        <article className="bg-eggShell p-5 sm:w-3/4 md:w-2/3 lg:w-2/5 flex flex-col items-center rounded">
          <div className="landing-page-row1 flex flex-col p-3 w-full text-center">
            {/* <label htmlFor="landing-page-email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="landing-page-email"
              id="landing-page-email"
              className="shadow p-1 mb-5 rounded"
              placeholder="johnnyAppleseed@forrests.com"
            />
            <label htmlFor="landing-page-pw" className="mb-1">
              Password
            </label>
            <input
              type="password"
              name="landing-page-pw"
              id="landing-page-pw"
              className="shadow p-1 rounded"
              placeholder="We won't tell..."
            /> */}
            <h3 className="text-xl">
              Use your favorite social account or create an account using your email!
            </h3>
            {!session && (
              <a
                href="/api/auth/signin"
                target=""
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  {/* This needs to be updated so that users are redirected no matter what login flow they choose */}
                  signIn('google', { callbackUrl: 'http://localhost:3000/create-invoice' });
                }}
              >
                <button
                  type="button"
                  className="bg-lightBlue text-white w-2/5 self-center hover:bg-darkBlue hover:shadow-md active:bg-lime active:text-charcoal focus:outline-none focus:shadow-outline font-bold mt-10 p-2 rounded shadow"
                >
                  Sign In
                </button>
              </a>
            )}
            {session && (
              <a
                href="/api/auth/signout"
                target=""
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <button
                  type="button"
                  className="bg-black text-white w-2/5 self-center hover:bg-darkBlue hover:shadow-md active:bg-lime active:text-charcoal focus:outline-none focus:shadow-outline font-bold mt-10 p-2 rounded shadow"
                >
                  Sign Out
                </button>
              </a>
            )}
          </div>
          <div className="landing-page-row2 flex flex-row w-full text-center mt-8 justify-between">
            <div>
              <p>Can't remember your password?</p>
              <p>
                <a href="#" className="text-liteRed font-semibold underline hover:no-underline">
                  Forgot my password
                </a>
              </p>
            </div>
            <div>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
            <div>
              <p>Don't have an account yet?</p>
              <p className="text-medDarkBlue font-semibold underline hover:no-underline">
                <a href="#">Register an account</a>
              </p>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
