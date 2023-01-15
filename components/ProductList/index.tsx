import Product, { ProductProps } from "@components/Product";
import Link from "next/link";
import styles from "./styles.module.css";
export default function ProductList({ items }: { items: ProductProps[] }) {
  return (
    <ul className={styles.productList}>
      {items.map((product) => (
        <li className={styles.productListElement} key={product.id}>
          <Link href={`/product/${product.id}`}>
            <Product {...product} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
