import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { motion, useScroll } from "framer-motion";
interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  // const { scrollY } = useScroll();
  // const [hidden, setHidden] = React.useState(false);
  // function update() {
  //   if (scrollY?.get() < scrollY?.getPrevious()) {
  //     console.log("masuk1");
  //     setHidden(true);
  //   } else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.get()) {
  //     setHidden(false);
  //     console.log("masuk2");
  //   }
  // }
  // React.useEffect(() => {
  //   return scrollY.on("change", update);
  // });
  // const variants = {
  //   /** this is the "visible" key and it's correlating styles **/
  //   visible: { display: "block" },
  //   /** this is the "hidden" key and it's correlating styles **/
  //   hidden: { display: "none" },
  // };
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
