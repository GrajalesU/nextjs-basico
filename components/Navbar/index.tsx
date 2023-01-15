import HeaderElement from "@components/HeaderElement";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li
          className={`${styles.navElement} ${
            pathname === "/" && styles.selected
          }`}
        >
          <Link
            href="/"
            style={{
              fontWeight: 600,
            }}
          >
            <HeaderElement src="/logo/aguacatesMor32.png" text="AguacateMor" />
          </Link>
        </li>
        <li
          className={`${styles.navElement} ${
            pathname === "/about" && styles.selected
          }`}
        >
          <Link href="/about">
            <HeaderElement src="/images/basket.png" text="Canasta" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
