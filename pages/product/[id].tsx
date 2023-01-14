import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Product detail</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
        </div>
      )}
    </div>
  );
}
