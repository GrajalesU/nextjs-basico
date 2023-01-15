import Presentation from "@components/Presentation";
import ProductList from "@components/ProductList";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length: newLength }) => {
        setProductList(data);
        setLength(newLength);
      });
  }, []);

  return (
    <>
      <Presentation />
      <small className={styles.length}>{length} elements</small>
      <ProductList items={productList} />
    </>
  );
}
