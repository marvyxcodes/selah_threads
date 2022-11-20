import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weeb Max</title>
        <meta
          name="description"
          content="Website dedicated anime related merchandise"
        />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        Copyright @ WeebMania Inc. Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
