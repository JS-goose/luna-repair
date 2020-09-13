import React, { useState } from "react";
import Link from "next/link";
import { providers, signIn } from "next-auth/client";
import Image from "../../components/Image/image";
import GoogleImg from "../../images/icons/Google.png";
import FacebookImg from "../../images/icons/Facebook.png";
import EmailImg from "../../images/icons/Email.svg";

export default function SignIn({ providers }) {
  const [containers = [], setContainers] = useState();
  return (
    <section className="signin-container text-white flex flex-col items-center justify-center">
      <article className="bg-wht20 sm:w-full md:w-auto p-4 text-center border-solid border-2 border-medDarkBlue rounded mb-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Welcome to Luna Repair System!</h1>
      </article>
      <article className="flex flex-col items-center bg-medDarkBlue p-6 text-xl rounded-sm shadow-xl">
        <h1 className="text-2xl mb-4">Please choose a sign in method:</h1>
        <div className="flex flex-row">
          {Object.values(providers).map(
            (provider) => (
              containers.push(provider),
              console.log(containers),
              (
                <div
                  key={provider.name}
                  data-key={provider.name}
                  className="button-container flex flex-row justify-center w-32 rounded-sm hover:bg-darkBlue p-6">
                  {/* Social icons courtesy of Alex Martinov https://dribbble.com/Rengised */}
                  <button onClick={() => signIn(provider.id, { callbackUrl: "http://localhost:3000/create-invoice" })}>
                    <img
                      src={
                        provider.id === "google"
                          ? GoogleImg
                          : provider.id === "facebook"
                          ? FacebookImg
                          : provider.id === "email"
                          ? EmailImg
                          : ""
                      }
                      className="h-12 w-12"
                      alt={
                        provider.id === `google`
                          ? `the google logo`
                          : provider.id === `facebook`
                          ? `the facebook logo`
                          : provider.id === `email`
                          ? `a letter`
                          : ``
                      }
                    />
                  </button>
                </div>
              )
            )
          )}
        </div>
        <p className="border border-charcoal p-2 mt-4 rounded bg-liteRed">
          <Link href="/">Cancel Sign In</Link>
        </p>
      </article>
    </section>
  );
}
SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
