import React from "react";
import { getCsrfToken } from "next-auth/react";
import styles from "../../styles/Credentials.module.css";

export default function SignIn({ csrfToken }) {
  return (
    <form
      className={styles.login_form}
      method="POST"
      action="/api/auth/callback/credentials"
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
