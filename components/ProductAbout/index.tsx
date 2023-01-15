import styles from "./styles.module.css";

export default function ProductAbout({
  shape,
  hardiness,
  taste,
  description,
}: {
  shape: string;
  description: string;
  hardiness: string;
  taste: string;
}) {
  return (
    <div className={styles.about}>
      <h2 className={styles.aboutTitle}>About this avocado</h2>
      <p className={styles.aboutDescription}>{description}</p>
      <table className={styles.aboutTable}>
        <thead>
          <tr>
            <th colSpan={2} className={styles.aboutTableTitle}>
              Attributes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shape</td>
            <td>{shape}</td>
          </tr>
          <tr>
            <td>Hardiness</td>
            <td>{hardiness}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{taste}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
