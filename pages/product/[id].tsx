import ProductAbout from "@components/ProductAbout";
import ProductContent from "@components/ProductContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      {product && (
        <div className={styles.container}>
          <ProductContent {...product} />
          <ProductAbout {...product.attributes} />
        </div>
      )}
    </>
  );
}
