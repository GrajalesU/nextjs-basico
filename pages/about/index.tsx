import FunFacts from "@components/FunFacts";
import Head from "next/head";
import styles from "./styles.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>AguacateMor | About</title>
      </Head>
      <div className={styles.about}>
        <h1 className={styles.aboutTitle}>
          13 Surprising Facts About Avocados
        </h1>
        <Image
          src="https://platzi-avo.vercel.app/images/avocados.jpg"
          alt="Avocados cut in half"
          width={900}
          height={650}
        />
        <small className={styles.reference}>
          <span>Originally from</span>
          <a
            href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Taste of Home
          </a>
        </small>
        <FunFacts />
      </div>
    </>
  );
}
