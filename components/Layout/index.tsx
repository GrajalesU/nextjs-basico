import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { ReactNode } from "react";
import styles from "./styles.module.css";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
