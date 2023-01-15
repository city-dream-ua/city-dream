import NextAuth from 'next-auth';

import FacebookProvider from 'next-auth/providers/facebook';
import { Session } from 'inspector';
import { JWT } from 'next-auth/jwt';


export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string
    })
  ],
  callbacks: {
    // @ts-ignore
    async session({ session, token }: { session: Session & { id: unknown, token: unknown }, token: JWT }) {
      session.id = token.id;
      session.token = token.accessToken;

      return session;
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET
});
