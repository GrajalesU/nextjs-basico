import CartItem from "@components/CartItem";
import { CartItemType } from "store/Cart";
import styles from "./styles.module.css";
export default function CartItemList({
  items,
}: {
  items: CartItemType[];
 
  loading?: boolean;
}) {
  if (items.length === 0)
    return (
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyCartTitle}>Your cart is empty</h2>
        <p className={styles.emptyCartContent}>
          You will need to add some items to the cart before you can checkout.
        </p>
      </div>
    );

  return (
    <div className={styles.itemList}>
      {items.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </div>
  );
}
