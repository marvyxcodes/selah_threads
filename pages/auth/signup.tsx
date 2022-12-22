import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Credentials.module.css";

// From here req.body is sent to /api/auth/signup where creation is handled.

export default function Signup() {
  const router = useRouter();

  // console.log(router);
  const [password, setPassword] = React.useState();

  // i can do client-side validation of password confirmations?,
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username;
    const password = e.target.password;
    const rpassword = e.target.rpassword;

    if (password.value !== rpassword.value) {
      password.style.borderColor = "red";
      rpassword.style.borderColor = "red";
      password.value = "";
      rpassword.value = "";
    } else if (password.value === rpassword.value) {
      const data = {
        username: e.target.username.value,
        password: e.target.password.value,
        rpassword: e.target.rpassword.value,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/auth/signup";

      const options = {
        method: "POST",
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const result = await response.json();
      console.log(result);
      if (result === "Success") router.push("/api/auth/signin");
      if (result === "userExists") console.log("user already exists");
    }
  }

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      {/* <input name="csrfToken" type="hidden" /> */}
      <label>
        Username
        <input name="username" type="text" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <label>
        Confirm Password
        <input name="rpassword" type="password" required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
