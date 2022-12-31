import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ProductsProvider } from "../context/ProductsGridContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider>
        <ShoppingCartProvider>
          <ProductsProvider>
          <Navbar />
          <Component {...pageProps} />
          </ProductsProvider>
        </ShoppingCartProvider>
      </SessionProvider>
    </>
  );
}
