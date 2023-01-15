import styles from "./styles.module.css";

export interface ProductProps {
  image: string;
  name: string;
  price: number;
  id: TProductId;
}

export default function Product({ image, name, price, id }: ProductProps) {
  return (
    <article className={styles.product}>
      <img className={styles.productImg} src={image} alt={`Avocado ${name}`} />
      <h3 className={styles.productName}>{name}</h3>
      <span className={styles.productPrice}>{price}</span>
    </article>
  );
}
