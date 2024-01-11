import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const email = credentials.email;
        const password = credentials.password;

        // Check if user already exists

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          const newUser = await prisma.user.create({
            data: { email, password },
          });
          return {
            id: newUser.id,
            email: newUser.email,
          };
        } else {
          if (user.password !== password) {
            return null;
          }
          // User is authenticated
          return {
            id: user.id,
            email: user.email,
          };
        }
      },
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
};
