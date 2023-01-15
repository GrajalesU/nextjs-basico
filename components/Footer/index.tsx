import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerListColumn}>
          <h4 className={styles.footerTitle}>About us</h4>
          <Link className={styles.footerAnchor} href={"/about"}>
            Learn more
          </Link>
        </li>
        <li className={styles.footerListColumn}>
          <h4 className={styles.footerTitle}>Services</h4>
          <Link className={styles.footerAnchor} href={"/"}>
            All products
          </Link>
        </li>
        <li className={styles.footerListColumn}>
          <h4 className={styles.footerTitle}>Made for</h4>
          <p>
            <b>Platzi</b> and his <b>Next.JS course</b>
          </p>
        </li>
      </ul>
      <small className={styles.owner}>
        Made by <b>Juan Manuel Grajales</b>
        <ul className={styles.ownerSocialMedia}>
          <li className={styles.ownerSocialMediaElement}>
            <a
              href="https://github.com/GrajalesU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logo/github.svg" alt="Github logo" /> Github
            </a>
          </li>
          <li className={styles.ownerSocialMediaElement}>
            <a
              href="https://www.linkedin.com/in/juan-manuel-grajales-urquijo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logo/linkedIn.svg" alt="linkedIn logo" /> LinkedIn
            </a>
          </li>
        </ul>
      </small>
    </footer>
  );
}
