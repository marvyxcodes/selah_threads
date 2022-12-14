import React from "react";
import { getCsrfToken } from "next-auth/react";
import styles from "../../styles/Credentials.module.css";

export default function Signup() {
  return (
    <form className={styles.login_form} method="POST" action="/api/auth/signup">
      {/* <input name="csrfToken" type="hidden" /> */}
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <label>
        Confirm Password
        <input name="rpassword" type="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
