import "./App.css";
import { Head } from "@impalajs/react/head";
import React from "react";
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import { Header } from "./components/Header";

interface AppProps {
  title: string;
}

export const App: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  return (
    <ShopifyProvider
      storeDomain={import.meta.env.VITE_SHOPIFY_STORE}
      storefrontToken={import.meta.env.VITE_STOREFRONT_TOKEN}
      storefrontApiVersion="2023-01"
      countryIsoCode="GB"
      languageIsoCode="EN"
    >
      <CartProvider>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <main>{children}</main>
      </CartProvider>
    </ShopifyProvider>
  );
};
