import ProductAbout from "@components/ProductAbout";
import ProductContent from "@components/ProductContent";
import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "./styles.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://aguacate-mor.vercel.app/api/avo");
  const data: TAPIAvoResponse = await res.json();
  const { data: productList } = data;
  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const res = await fetch(`https://aguacate-mor.vercel.app/api/avo/${id}`);

  const product: TAPIAVODetailResponse = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default function ProductDetail({ product }: { product: TProduct }) {
  return (
    <>
      <Head>
        <title>AguacateMor | {product.name}</title>
      </Head>

      <div className={styles.container}>
        <ProductContent product={product} />
        <ProductAbout {...product.attributes} />
      </div>
    </>
  );
}
