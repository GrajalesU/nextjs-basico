import CartItemList from "@components/CartItemList";
import CartSummary from "@components/CartSummary";
import { useCart, useCartMutations } from "store/Cart";
import styles from "./styles.module.css";

export default function Cart() {
  const {  items ,subTotal} = useCart();
  return (
    <div className={styles.container}>
      <CartItemList items={items} />
      <CartSummary totalAmount={subTotal} />
    </div>
  );
}
