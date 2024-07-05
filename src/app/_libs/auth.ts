import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { Adapter } from 'next-auth/adapters';
import { AuthOptions } from "next-auth";
import { db } from './prisma';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const existingUser = await db.user.findUnique({
        where: { email: user.email ?? "" },
      });

      if (existingUser) {
        session.user = {
          ...session.user,
          id: user.id,
          type: existingUser.type
        } as {
          id: string,
          name: string,
          email: string,
          type: string
        };
      }

      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}