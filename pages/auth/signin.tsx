import React from "react";
import { getCsrfToken } from "next-auth/react";
import styles from "../../styles/Credentials.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignIn({ csrfToken }) {



  
  return (
    <>
      <form
        className={styles.login_form}
        method='POST'
        onSubmit={() => signIn('credentials', {
          redirect: false,
          username: 'test',
          password: 'test2',
        }).then((err) => {console.log(err)}).catch(err => console.error(err))
      }
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
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
