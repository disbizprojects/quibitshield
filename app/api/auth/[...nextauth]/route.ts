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
import getUpdatedStatus from "@/app/admin/loginInfo/getUpdatedStatus";

const prisma = new PrismaClient();
const loginUserSchema = z.object({
  password: z.string().min(8),
});

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        name: { label: "Name", type: "text", placeholder: "name" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        if (!credentials) return null;

        const user = await prisma.user.findUnique({
          where: {
            name: credentials.name,
            password: credentials.password,
          },
        });

        if (
          user?.name === credentials.name &&
          user?.password === credentials.password
        ) {
          return user;
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/dashboard",
    signOut: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
