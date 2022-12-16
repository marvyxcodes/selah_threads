import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <ShoppingCartProvider>
          <Navbar />
          <Component {...pageProps} />
        </ShoppingCartProvider>
      </SessionProvider>
    </>
  );
}
