import "@/styles/bootstrap.min.css";
import "@/styles/navbarStyles.css";
import "@/styles/generalStyles.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  //this is what the solution says:
  useEffect(() => {
    import("@/public/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}
