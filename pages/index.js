import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from '../components/Image/image';

export default function Home() {
  return (
    <article className="landing-page-container flex flex-col items-center justify-center sm:space-y-10 md:space-y-40">
      <div className="bg-wht20 sm:w-full md:w-auto p-4 text-center border-solid border-2 border-medDarkBlue rounded">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          Welcome to Luna Repair System!
        </h1>
      </div>
      <div className="bg-eggShell p-5 sm:w-3/4 md:w-2/3 lg:w-2/5 flex flex-col items-center rounded">
        <div className="landing-page-row1 flex flex-col p-3 w-full">
          <label htmlFor="landing-page-email" className="mb-1">
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
          />
          <button
            type="submit"
            className="bg-lightBlue text-white w-1/2 self-center hover:bg-darkBlue hover:shadow-md active:bg-lime active:text-charcoal focus:outline-none focus:shadow-outline font-bold mt-10 p-2 rounded shadow"
          >
            LOGIN
          </button>
        </div>

        <div className="landing-page-row2 flex flex-row w-full text-center mt-5">
          <p className="w-1/2 text-liteRed font-semibold underline hover:no-underline">
            <a href="#">Forgot my password</a>
          </p>
          <p className="w-1/2 text-medDarkBlue font-semibold underline hover:no-underline">
            <a href="#">Register an account</a>
          </p>
        </div>
      </div>
    </article>
  );
}
