import Image from "next/image";
import styles from "./styles.module.css";
export default function Presentation() {
  return (
    <div className={styles.presentation}>
      <h1 className={styles.presentationTitle}>Aguacate Mor</h1>
      <Image
        className={styles.presentationImg}
        src="/logo/aguacatesMor32.png"
        alt="Aguacate"
        width={32}
        height={32}
      />
      <h2 className={styles.presentationSubtitle}>It's for you</h2>
    </div>
  );
}
