import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const response = await axios.post("https://akil-backend.onrender.com/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = response.data;
          if (user?.accessToken) {
        
            return { ...user, id: user.userId, accessToken: user.accessToken } as { id: string; accessToken: string };
          }
          return null;
        } catch (err) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  }, 
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
