import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

// type credObj = {
//   username: {
//     label: string;
//     type: string;
//     placeholder: string;
//   }
//   password: {label: string; type: string;}
// }

// create sign-up page.

export const authOptions = {
  // NEXTAUTH_URL= DOMAIN NAME ==== THIS IS FOR WHEN PUSHING TO PRODUCTION //
  pages: {
    signIn: "/auth/signin",
    signOut: "auth/signout",
    newUser: "auth/new-user",
  },
  providers: [
    Credentials({
      // Name displayed on the sign in form
      name: "Username or Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "email",
          placeholder: "weeblove21",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        // here we want to await our mongoose database validation from the MONGODB directory

        // credentials is equal to whatever the form values were here. cross reference with Mongodb here using an external function/component

        console.log("credentials: ", credentials);
        console.log("req: ", req);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT

          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
