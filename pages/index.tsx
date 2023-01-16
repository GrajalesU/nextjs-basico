import Presentation from "@components/Presentation";
import ProductList from "@components/ProductList";
import Head from "next/head";
import styles from "./styles.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://aguacate-mor.vercel.app/api/avo");
  const data: TAPIAvoResponse = await res.json();
  const { data: productList, length } = data;

  return {
    props: {
      productList,
      length,
    },
  };
};

export default function Home({
  productList,
  length,
}: {
  productList: TProduct[];
  length: number;
}) {
  return (
    <>
      <Head>
        <title>AguacateMor</title>
      </Head>
      <Presentation />
      <small className={styles.length}>{length} elements</small>
      <ProductList items={productList} />
    </>
  );
}
