import { log } from "console";
import { randomBytes, randomUUID } from "crypto";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const AuthHandler = NextAuth({
  providers: [
    CredentialsProvider({

      name: "Credentials",
      id: "credentials",
      type: "credentials",

      credentials: {
        username: {
          label: "Username",
          type: "username",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const credentialsObject = {
          username: credentials?.username,
          password: credentials?.password,
        };
        const res = await fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          body: JSON.stringify(credentialsObject),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();
        
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 10 * 24 * 60 * 60, // 10 days

    updateAge: 24 * 60 * 60, // 24 hours

    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.accessToken = user.token;
        token.username = user.username;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {

      session.user = {
        username: token.username,
        accessToken: token.accessToken,
      };
      return session;
    },
  },
  pages: {
    signIn: "/user/login",
  },
});

export { AuthHandler as GET, AuthHandler as POST };
