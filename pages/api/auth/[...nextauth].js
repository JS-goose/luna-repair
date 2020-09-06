import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  pages: {
    signIn: '/auth/signin',
  },
  site: process.env.SITE || `http://localhost:3000`,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ! This has been left out because of the absence of a database to persist user account information within
    Providers.Email({
      clientId: process.env.EMAIL_SERVER,
      clientSecret: process.env.EMAIL_FROM,
    }),
  ],
  //! When a database is established, this can be uncommented
  //Needed to persist user accounts within
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
