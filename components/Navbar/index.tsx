import HeaderElement from "@components/HeaderElement";
import Link from "next/link";
import styles from "./styles.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={`${styles.navElement} ${styles.selected}`}>
          <Link
            href="/"
            style={{
              fontWeight: 600,
            }}
          >
            <HeaderElement src="/logo/aguacatesMor32.png" text="AguacateMor" />
          </Link>
        </li>
        <li className={styles.navElement}>
          <Link href="/about">
            <HeaderElement src="/images/basket.png" text="Canasta" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
