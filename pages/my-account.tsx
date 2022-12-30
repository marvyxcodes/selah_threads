import React from "react";

// userAuth check here //
// if user is not logged in show login page.

function myAccount() {
  // Fetch the user client-side
  //   const { user } = useUser({ redirectTo: "/login" });

  //   // Server-render loading state
  //   if (!user || user.isLoggedIn === false) {
  //     return <Layout>Loading...</Layout>;
  //   }

  // Once the user request finishes, show the user
  return (
    <div>
      <h1>Your Profile</h1>
    </div>
  );
}

export default myAccount;
