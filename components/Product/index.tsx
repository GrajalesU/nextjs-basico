import Image from "next/image";
import styles from "./styles.module.css";

export interface ProductProps {
  image: string;
  name: string;
  price: number;
  id: TProductId;
}

export default function Product({ image, name, price }: ProductProps) {
  return (
    <article className={styles.product}>
      <Image className={styles.productImg} src={image} alt={`Avocado ${name}`} width={300} height={300} />
      <h3 className={styles.productName}>{name}</h3>
      <span className={styles.productPrice}>{price}</span>
    </article>
  );
}
