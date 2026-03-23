import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const NextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Login page",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const data = await fetch(
            `https://ecommerce.routemisr.com/api/v1/auth/signin`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          const res = await data.json();
          console.log(res);
          if (data.ok) {
            const { name, email } = res?.user;
            return { name, email, id: "" };
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);

          return null;
        }
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/auth/login",
  },
};
