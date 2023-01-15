import styles from "./styles.module.css";

export default function ProductContent({
  name,
  image,
  price,
  sku,
}: {
  name: string;
  image: string;
  price: number;
  sku: string;
}) {
  return (
    <div className={styles.product}>
      <img src={image} alt={`${name}`} />
      <div className={styles.productDetail}>
        <h1 className={styles.productDetailName}>{name}</h1>
        <span className={styles.productDetailPrice}>{price}</span>
        <span className={styles.productDetailSku}>SKU: {sku}</span>
        <div className={styles.flex}>
          <input className={styles.productInput} type="number" min={1} />
          <button className={styles.productBtn}>
            <img
              className={styles.productIcon}
              src="/images/cart.svg"
              alt="cart"
            />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
