import CartItemList from "@components/CartItemList";
import CartSummary from "@components/CartSummary";
import Head from "next/head";
import { useCart } from "store/Cart";
import styles from "./styles.module.css";

export default function Cart() {
  const { items, subTotal } = useCart();
  return (
    <>
      <Head>
        <title>AguacateMor | Cart</title>
      </Head>
      <div className={styles.container}>
        <CartItemList items={items} />
        <CartSummary totalAmount={subTotal} />
      </div>
    </>
  );
}
