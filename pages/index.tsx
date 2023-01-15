import Presentation from "@components/Presentation";
import Product from "@components/Product";
import { useEffect, useState } from "react";

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
      <Presentation />
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </>
  );
}
