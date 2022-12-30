import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
