import styles from "./styles.module.css";

export default function CartSummary({ totalAmount }: { totalAmount: number }) {
  return (
    <div className={styles.line}>
      <div className={styles.summary}>
        <span>
          <strong>Sub total:</strong>
          {` $${totalAmount}`}
        </span>
        <button className={styles.summaryBtn}>Check out</button>
      </div>
    </div>
  );
}
