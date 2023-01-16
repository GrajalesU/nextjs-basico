import AddToCart from "@components/AddToCart";
import styles from "./styles.module.css";

export default function ProductContent({ product }: { product: TProduct }) {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={`${product.name}`} />
      <div className={styles.productDetail}>
        <h1 className={styles.productDetailName}>{product.name}</h1>
        <span className={styles.productDetailPrice}>{product.price}</span>
        <span className={styles.productDetailSku}>SKU: {product.sku}</span>
        <AddToCart product={product} />
      </div>
    </div>
  );
}
