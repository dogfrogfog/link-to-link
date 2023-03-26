import NextAuth, { Session } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import db from '@/db';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({ session, user }: any) {
      session.user = user;

      return session;
    },
  },
};

export default NextAuth(authOptions);
