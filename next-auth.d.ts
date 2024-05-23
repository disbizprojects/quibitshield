// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

// Extend the session object to include the `role` property
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      password?: string | null;
      role?: string | null; // Add role property
    } & DefaultSession["user"];
  }
}
