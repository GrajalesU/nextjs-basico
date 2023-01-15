import styles from "./styles.module.css";

interface FunFactProps {
  title: string;
  content: string;
}

export default function FunFact({ title, content }: FunFactProps) {
  return (
    <li className={styles.funFactElement}>
      <h2 className={styles.funFactElementTitle}>
        
        {title}
      </h2>
      <p className={styles.funFactElementContent}>
        {content}
        While avocados are grown in California and Florida, the majority sold in
        grocery stores come from south central Mexico. The main reason for the
        abundance of “south of the border” avocados is that Mexico is blessed
        with a year-round growing climate. The avocado is believed to have
        originated in the state of Puebla, Mexico, as far back as 10,000 B.C.
      </p>
    </li>
  );
}
