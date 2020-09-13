import React, { useState } from "react";
import { providers, signIn } from "next-auth/client";
import Image from "../../components/Image/image";
import GoogleImg from "../../images/icons/Google.png";
import FacebookImg from "../../images/icons/Facebook.png";
import EmailImg from "../../images/icons/Email.svg";

export default function SignIn({ providers }) {
  const [containers = [], setContainers] = useState();
  return (
    <section className="signin-container text-white flex flex-col items-center justify-center">
      <article className="bg-medDarkBlue p-6 text-xl rounded-sm shadow-xl">
        {Object.values(providers).map(
          (provider) => (
            containers.push(provider),
            console.log(containers),
            (
              <div
                key={provider.name}
                data-key={provider.name}
                className="button-container flex flex-col justify-center p-4 border border-charcoal rounded-sm hover:bg-darkBlue">
                <button onClick={() => signIn(provider.id, { callbackUrl: "http://localhost:3000/create-invoice" })}>
                  Sign in with {provider.name}{" "}
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
                    alt=""
                  />
                </button>
              </div>
            )
          )
        )}
      </article>
    </section>
  );
}
SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
