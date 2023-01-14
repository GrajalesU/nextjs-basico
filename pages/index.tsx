import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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
    <div>
      <Navbar />
      <h1>Hola Platzi!</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
