import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  pages: {
    signIn: "/auth/signin",
  },
  site: process.env.SITE || `http://localhost:3000`,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ! This has been left out because of the absence of a database to persist user account information within
    Providers.Email({
      clientId: process.env.EMAIL_SERVER,
      clientSecret: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl) ? Promise.resolve(url) : Promise.resolve(baseUrl);
    },
    session: async (session, user) => {
      return Promise.resolve(session);
    },
  },
  //! When a database is established, this can be uncommented
  //Needed to persist user accounts within
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
