// import React from "react";
// import LoginPage from "../components/LoginPage";

// // userAuth check here //
// // if user is not logged in show login page.

// function myAccount() {
//   // Fetch the user client-side
//   const { user } = useUser({ redirectTo: "/login" });

//   // Server-render loading state
//   if (!user || user.isLoggedIn === false) {
//     return <Layout>Loading...</Layout>;
//   }

//   // Once the user request finishes, show the user
//   return (
//     <Layout>
//       <h1>Your Profile</h1>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </Layout>
//   );
// }

// export default myAccount;

// //  When directed to my-account page, go through authorization check.
// //  Authorization component will check to see if user is logged in currently.
// //  If not logged in return sign-in page.
// //
// //
// //
// //
// //
// //
