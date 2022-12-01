import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import MainBanner from "../components/MainBanner";
import { FPModule } from "../components/FPModule";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weeb Max</title>
        <meta
          name="description"
          content="Website dedicated anime related merchandise"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        {/* <Link href="/api/collections/one-piece">api test</Link> */}
        <MainBanner />

        <section className={styles.modulesContainer}>
          {/* FP - FRONT PAGE MODULE*/}
          <FPModule
            heading="Upcoming releases"
            src="/upcomingR.jpg"
            url="/upcoming-releases"
          />
          <FPModule
            heading="Upcoming releases"
            src="/cherryBlossoms.jpg"
            url="/upcoming-releases"
          />
        </section>
        {/* <Image
          src="/zero-two-welcome.png"
          alt="zero two from Darling in the franxx"
          className={styles.zero_two}
          width={200}
          height={400}
        /> */}
      </main>

      <footer className={styles.footer}>
        Copyright @ WeebMania Inc. Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
