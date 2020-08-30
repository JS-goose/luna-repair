import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from '../components/Image/image';

export default function Home() {
  return (
    <article className="landing-page-container flex flex-col items-center justify-center sm:space-y-10 md:space-y-40">
      <div className="bg-wht20 sm:w-full md:w-auto p-4 text-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Welcome to Luna Repair System!</h1>
      </div>
      <div className="bg-eggShell p-5 sm:w-auto md:w-2/3 lg:w-2/5 flex flex-col items-center">
        <div className="landing-page-row1 flex flex-col p-3 w-full">
          <label htmlFor="landing-page-email">Email</label>
          <input
            type="email"
            name="landing-page-email"
            id="landing-page-email"
            className="shadow p-1 mb-5"
            placeholder="johnnyAppleseed@forrests.com"
          />
          <label htmlFor="landing-page-pw">Password</label>
          <input
            type="password"
            name="landing-page-pw"
            id="landing-page-pw"
            className="shadow p-1"
            placeholder="We won't tell..."
          />
          <button
            type="submit"
            className="bg-lightBlue text-white hover:bg-darkBlue hover:shadow-md active:bg-lime active:text-charcoal focus:outline-none focus:shadow-outline font-bold mt-3 p-2"
          >
            LOGIN
          </button>
        </div>

        <div className="landing-page-row2 flex flex-row w-full text-center mt-5">
          <p className="w-1/2">Forgot my password</p>
          <p className="w-1/2">Register an account</p>
        </div>
      </div>
    </article>
  );
}
