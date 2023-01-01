import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import TailwindNav from "../components/TailwindNav";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weeb Max</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
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
      <SessionProvider>
        <ShoppingCartProvider>
          {/* <Navbar /> */}
          <TailwindNav />
          <Component {...pageProps} />
        </ShoppingCartProvider>
      </SessionProvider>
    </>
  );
}
