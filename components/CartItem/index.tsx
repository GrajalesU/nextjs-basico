import { CartItemType, useCartMutations } from "store/Cart";
import styles from "./styles.module.css";
export default function CartItem({ item }: { item: CartItemType }) {
  const { removeFromCart } = useCartMutations();

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} />
      <div className={styles.cartItemDescription}>
        <h2 className={styles.cartItemName}>{item.name}</h2>
        <span className={styles.cartItemSummary}>
          {item.quantity} x ${item.price}
        </span>
        <p className={styles.cartItemDetail}>{item.attributes.description}</p>
        <button
          className={styles.deleteButton}
          onClick={() => removeFromCart(item)}
        >
          X
        </button>
      </div>
    </div>
  );
}
