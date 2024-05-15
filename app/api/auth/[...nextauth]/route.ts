import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { DefaultSession } from "next-auth";
import { User as UserModel } from "@prisma/client";

declare module "next-auth" {
  interface User extends UserModel {
    id: number; // <- here it is
  }
}
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const loginUserSchema = z.object({
  password: z.string().min(8),
});

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        password: { type: "password", placeholder: "password" },
      },
      async authorize(credentials: any) {
        if (!credentials) {
          return Promise.resolve(null);
        }

        const user = await prisma.user.findUnique({
          where: {
            id: 123334,
          },
        });

        if (user && user.password === credentials.password) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],

  pages: {
    signIn: "/dashboard",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
