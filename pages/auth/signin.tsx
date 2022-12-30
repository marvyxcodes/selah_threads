import React from "react";
import { getCsrfToken } from "next-auth/react";
import styles from "../../styles/Credentials.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

export default function SignIn({ csrfToken }: any) {
  const router = useRouter();

  // upon inital load check if login error is detected within query object.
  // This is done so when wrong credentials are input, same login page is returned,
  // but necessary checks are done regarding url query on callbacks.
  let signInError = router.query.error;

  return (
    <div className={styles.credentials_container}>
      {signInError && (
        <div className={styles.loginError}>
          <p>Username or Password are invalid</p>
        </div>
      )}
      <form
        className={styles.login_form}
        method="POST"
        action="/api/auth/callback/credentials"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Username
          <input name="username" type="text" required />
        </label>
        <label>
          Password
          <input name="password" type="password" required />
        </label>
        <button type="submit">Sign in</button>
      </form>
      <div className={styles.signUpLink}>
        <p>
          New User? Sign up <Link href="/auth/signup">here.</Link>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
