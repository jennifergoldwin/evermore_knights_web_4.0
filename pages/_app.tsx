import "../styles/globals.css";
import "../styles/style.scss";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    console.log(document.readyState);
    if (document.readyState === "complete") {
      console.log("complete");
    }
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
