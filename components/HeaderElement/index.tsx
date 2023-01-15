import Image from "next/image";
import styles from "./styles.module.css";

export default function HeadElement({
  src,
  text,
}: {
  src: string;
  text: string;
}) {
  return (
    <div className={styles.logo}>
      <Image
        src={src}
        alt="Logo"
        width={32}
        height={32}
        className={styles.logoImg}
      />
      <span className={styles.logoName}>{text}</span>
    </div>
  );
}
